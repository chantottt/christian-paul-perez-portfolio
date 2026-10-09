import { test, expect } from '@playwright/test'

test.beforeEach(async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'reduce' })
  await page.goto('/')
})

test('all requested sections and real contact link are available', async ({ page }) => {
  await expect(page.getByRole('heading', { level: 1 })).toHaveAccessibleName('Better software starts with better testing.')
  for (const id of ['home', 'about', 'skills', 'projects', 'experience', 'contact']) {
    await expect(page.locator('#' + id)).toBeAttached()
  }
  await expect(page.getByRole('link', { name: 'Connect on LinkedIn', exact: false }).first()).toHaveAttribute('href', 'https://www.linkedin.com/in/christian-paul-perez-591592379/')
  await expect(page.getByRole('link', { name: /live demo|source code/i })).toHaveCount(0)
  await expect(page.getByRole('link', { name: 'GitHub', exact: false }).first()).toHaveAttribute('href', 'https://github.com/chantottt')
  await expect(page.locator('#contact').getByRole('link', { name: 'christianpaulperez362@gmail.com' })).toHaveAttribute('href', 'mailto:christianpaulperez362@gmail.com')
  await expect(page.locator('#contact').getByRole('link', { name: '09460468338' })).toHaveAttribute('href', 'tel:+639460468338')
  await expect(page.getByRole('link', { name: 'Download Resume', exact: true })).toHaveAttribute('href', '/resume.pdf')
})

test('navigation scrolls and marks the current section', async ({ page }) => {
  await page.getByRole('navigation', { name: 'Main navigation', exact: true }).getByRole('link', { name: 'Projects', exact: true }).click()
  await expect(page).toHaveURL(/#projects$/)
  await expect(page.getByRole('navigation', { name: 'Main navigation', exact: true }).getByRole('link', { name: 'Projects', exact: true })).toHaveAttribute('aria-current', 'location')
})

test('project categories return the correct projects', async ({ page }) => {
  const filters = page.getByRole('group', { name: 'Filter projects by category' })
  const cards = page.locator('.project-card')
  await expect(cards).toHaveCount(4)
  await expect(page.locator('.featured-card')).toContainText('MantunTamu')
  await filters.getByRole('button', { name: 'Full-Stack', exact: true }).click()
  await expect(cards).toHaveCount(1)
  await expect(cards.first()).toContainText('PeakPickle')
  await filters.getByRole('button', { name: 'Frontend', exact: true }).click()
  await expect(cards).toHaveCount(2)
  await expect(page.getByRole('button', { name: 'View details for MantunTamu' })).toBeVisible()
  await expect(page.getByRole('button', { name: 'View details for FindIT' })).toBeVisible()
  await filters.getByRole('button', { name: 'Quality Assurance', exact: true }).click()
  await expect(cards).toHaveCount(3)
  await filters.getByRole('button', { name: 'All', exact: true }).click()
  await expect(cards).toHaveCount(4)
})

test('details trap focus, support Escape, and restore the trigger', async ({ page }) => {
  const trigger = page.getByRole('button', { name: 'View details for PeakPickle' })
  await trigger.click()
  const dialog = page.getByRole('dialog')
  await expect(dialog).toBeVisible()
  await expect(dialog.getByRole('heading', { name: 'My responsibilities' })).toBeVisible()
  await expect(dialog).toContainText('Booking conflict prevention')
  const close = page.getByRole('button', { name: 'Close project details' })
  await expect(close).toBeFocused()
  await page.keyboard.press('Shift+Tab')
  await expect(page.getByRole('button', { name: 'Back to projects' })).toBeFocused()
  await page.keyboard.press('Tab')
  await expect(close).toBeFocused()
  await page.keyboard.press('Escape')
  await expect(dialog).toHaveCount(0)
  await expect(trigger).toBeFocused()
})

test('QA details explain the contribution scope', async ({ page }) => {
  await page.getByRole('button', { name: 'View details for MantunTamu' }).click()
  await expect(page.getByRole('dialog')).toContainText('I did not lead its full-stack or AI development.')
  await page.getByRole('button', { name: 'Close project details' }).click()
  await page.getByRole('button', { name: 'View details for Ma! Ano Ulam?' }).click()
  await expect(page.getByRole('dialog')).toContainText('not a claim of development contributions')
})

test('theme toggles and persists after reload', async ({ page }) => {
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'light')
  await page.getByRole('button', { name: 'Switch to dark theme' }).click()
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark')
  await page.reload()
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark')
  await page.getByRole('button', { name: 'Switch to light theme' }).click()
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'light')
})

test('skills filters preserve exposure labels', async ({ page }) => {
  const filters = page.getByRole('group', { name: 'Filter skills by category' })
  await filters.getByRole('button', { name: 'Databases', exact: true }).click()
  await expect(page.locator('.skill-group')).toHaveCount(1)
  await expect(page.locator('.skill-group')).toContainText('PostgreSQLExposure')
  await filters.getByRole('button', { name: 'All skills' }).click()
  await expect(page.locator('.skill-group')).toHaveCount(5)
})

test('mobile menu navigates and closes with Escape', async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 812 })
  await page.getByRole('button', { name: 'Open navigation' }).click()
  const mobile = page.getByRole('navigation', { name: 'Mobile navigation' })
  await expect(mobile.getByRole('link', { name: 'Home' })).toBeFocused()
  await page.keyboard.press('Escape')
  await expect(mobile).toHaveCount(0)
  await expect(page.getByRole('button', { name: 'Open navigation' })).toBeFocused()
  await page.getByRole('button', { name: 'Open navigation' }).click()
  await mobile.getByRole('link', { name: 'Contact' }).click()
  await expect(page).toHaveURL(/#contact$/)
  await expect(mobile).toHaveCount(0)
})

for (const width of [320, 375, 768, 1024, 1440, 1920]) {
  test('no page or modal overflow at ' + width + 'px', async ({ page }) => {
    await page.setViewportSize({ width, height: 900 })
    await expect.poll(() => page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true)
    await page.getByRole('button', { name: 'View details for FindIT' }).click()
    const dialog = page.getByRole('dialog')
    await expect(dialog).toBeVisible()
    expect(await dialog.evaluate(element => element.scrollWidth <= element.clientWidth)).toBe(true)
    await page.keyboard.press('Escape')
  })
}

test('editorial hero shows the identity without decorative code', async ({ page }) => {
  await expect(page.locator('.hero-name')).toHaveText('ChristianPaul Perez.')
  await expect(page.locator('.hero-role')).toHaveText('Aspiring Software Test Engineer')
  const portrait = page.getByRole('img', { name: 'Portrait of Christian Paul Perez smiling in a white shirt' })
  await expect(portrait).toHaveAttribute('src', '/profile/christian-paul-perez.jpg')
  await expect.poll(() => portrait.evaluate(image => (image as HTMLImageElement).naturalWidth)).toBe(810)
  await expect(page.locator('.code-editor')).toHaveCount(0)
})

test('capture the finished desktop and mobile layouts', async ({ page }, testInfo) => {
  await page.setViewportSize({ width: 1440, height: 1000 })
  for (const card of await page.locator('.project-card').all()) {
    await card.scrollIntoViewIfNeeded()
    await expect.poll(() => card.locator('img').first().evaluate(image => (image as HTMLImageElement).naturalWidth > 0)).toBe(true)
  }
  await page.locator('.project-card').filter({ hasText: 'Ma! Ano Ulam?' }).screenshot({ path: testInfo.outputPath('meal-project.png') })
  await page.evaluate(() => window.scrollTo(0, 0))
  await page.screenshot({ path: testInfo.outputPath('desktop.png'), fullPage: true })
  await page.getByRole('button', { name: 'Switch to dark theme' }).click()
  await page.screenshot({ path: testInfo.outputPath('dark.png'), fullPage: true })
  await page.getByRole('button', { name: 'Switch to light theme' }).click()
  await page.setViewportSize({ width: 375, height: 812 })
  await page.screenshot({ path: testInfo.outputPath('mobile-hero.png') })
  await page.screenshot({ path: testInfo.outputPath('mobile.png'), fullPage: true })
})

test('project screenshot gallery supports thumbnails, arrows, and Escape', async ({ page }, testInfo) => {
  await page.getByRole('button', { name: 'View details for PeakPickle' }).click()
  const project = page.getByRole('dialog', { name: /PeakPickle:/ })
  await expect(project.getByRole('button', { name: /Show Homepage/ })).toHaveAttribute('aria-pressed', 'true')
  await project.getByRole('button', { name: /Show Member dashboard/ }).click()
  await expect(project.getByRole('button', { name: /Show Member dashboard/ })).toHaveAttribute('aria-pressed', 'true')
  await project.getByRole('button', { name: /View full-screen Member dashboard/ }).click()
  const viewer = page.getByRole('dialog', { name: 'Screenshot viewer' })
  await expect(viewer).toBeVisible()
  await expect(viewer.getByRole('button', { name: 'Close screenshot viewer' })).toBeFocused()
  await page.keyboard.press('Shift+Tab')
  await expect(viewer.getByRole('link', { name: /Open original/ })).toBeFocused()
  await page.keyboard.press('Tab')
  await expect(viewer.getByRole('button', { name: 'Close screenshot viewer' })).toBeFocused()
  await page.keyboard.press('ArrowRight')
  await expect(viewer).toContainText('Administrator dashboard')
  await viewer.screenshot({ path: testInfo.outputPath('screenshot-viewer.png') })
  await page.keyboard.press('Escape')
  await expect(viewer).toHaveCount(0)
  await expect(project).toBeVisible()
  await page.keyboard.press('Escape')
  await expect(project).toHaveCount(0)
})

test('animated interactions do not produce browser errors', async ({ page }) => {
  const errors: string[] = []
  page.on('pageerror', error => errors.push(error.message))
  page.on('console', message => { if (message.type() === 'error') errors.push(message.text()) })
  await page.emulateMedia({ reducedMotion: 'no-preference' })
  await page.goto('/')
  await page.getByRole('link', { name: 'Explore My Projects' }).click()
  const filters = page.getByRole('group', { name: 'Filter projects by category' })
  await filters.getByRole('button', { name: 'Full-Stack', exact: true }).click()
  await expect(page.locator('.project-card')).toHaveCount(1)
  await page.getByRole('button', { name: 'View details for PeakPickle' }).click()
  await expect(page.getByRole('dialog')).toBeVisible()
  await page.keyboard.press('Escape')
  await expect(page.getByRole('dialog')).toHaveCount(0)
  expect(errors).toEqual([])
})

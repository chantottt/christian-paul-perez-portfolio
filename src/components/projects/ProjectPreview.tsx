import type { Project } from '../../types/portfolio'
import { ProjectArtwork } from './ProjectArtwork'
import { assetUrl } from '../../utils/assetUrl'

export function ProjectPreview({ project }: { project: Project }) {
  const screenshot = project.screenshots[0]
  if (!screenshot) return <ProjectArtwork project={project} />

  const portrait = Boolean(screenshot.width && screenshot.height && screenshot.height > screenshot.width)
  if (portrait) {
    return <div className="project-preview project-preview-mobile">
      <div className="mobile-preview-strip">
        {project.screenshots.slice(0, 3).map((image, index) => <div key={image.src} className={'mobile-preview-frame' + (index === 0 ? ' mobile-preview-primary' : '')}>
          <img src={assetUrl(image.src)} alt={image.alt} width={image.width} height={image.height} loading="lazy" decoding="async" />
        </div>)}
      </div>
    </div>
  }

  return <div className="project-preview">
    <img
      className="project-preview-image"
      src={assetUrl(screenshot.src)}
      alt={screenshot.alt}
      width={screenshot.width}
      height={screenshot.height}
      loading="lazy"
      decoding="async"
    />
  </div>
}

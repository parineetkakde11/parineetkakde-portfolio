import Cloud from './Cloud';

/** Cyan dotted "arcade stage" background with floating clouds (hero + page banners). */
export default function StageBackdrop({ as: Tag = 'section', className = '', children, ...rest }) {
  return (
    <Tag className={`stage ${className}`.trim()} {...rest}>
      <div className="stage__cloud stage__cloud--one">
        <Cloud />
      </div>
      <div className="stage__cloud stage__cloud--two">
        <Cloud />
      </div>
      <div className="stage__cloud stage__cloud--three">
        <Cloud />
      </div>
      <div className="stage__inner">{children}</div>
    </Tag>
  );
}

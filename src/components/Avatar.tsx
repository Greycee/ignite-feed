import styles from './Avatar.module.css'

interface AvatarProps {
  hasBorder?: boolean;
  src: string;
}

export default function Avatar({src, hasBorder=true}: AvatarProps) {
  const { avatar, avatarWithoutBorder } =  styles

  return(
    <img className={hasBorder ? avatar : avatarWithoutBorder} src={src} />
  )
}
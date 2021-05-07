import * as S from './styles'

export type CardImgProps = {
  color?: 'gray' | 'primary' | 'secondary'
  size?: 'normal' | 'large'
}

const CardImg = ({ color = 'gray', size = 'normal' }: CardImgProps) => (
  <S.Wrapper color={color} size={size}>
    <svg
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Star"
      viewBox="0 0 176 142"
    >
      <path
        d="M78.914 6.162c3.418-8.206 15.044-8.206 18.463 0l15.404 36.982a9.999 9.999 0 009.231 6.155h43.424c10.273 0 13.868 13.635 4.931 18.7l-30.506 17.29a10 10 0 00-4.301 12.544l12.577 30.194c3.662 8.792-5.876 17.241-14.162 12.545l-40.899-23.179a9.997 9.997 0 00-9.861 0l-40.899 23.179c-8.286 4.696-17.824-3.753-14.162-12.545l12.577-30.194a10 10 0 00-4.3-12.545L5.923 68c-8.938-5.065-5.343-18.7 4.93-18.7H54.28a10 10 0 009.231-6.155L78.914 6.162z"
        fill="currentColor"
      />
    </svg>
  </S.Wrapper>
)

export default CardImg

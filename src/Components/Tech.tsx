import { SectionWrapper } from '../hoc'
import { technologies } from '../constants'
import BallCanvas from './canvas/Ball'

const Tech: React.FC = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>

      {technologies.map((tech, index) => (
        <div className='w-28 h-28' key={index}>
          <BallCanvas icon={tech.icon}/>
        </div>
      ))}
    </div>
  )
}

export default SectionWrapper(Tech, 'tech')
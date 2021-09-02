import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/pro-regular-svg-icons'
import style from './ModalAbout.module.css'
import packageJson from './../../package.json'

const ModalAbout = ({
  closeModal = () => {},
}) => {
  return (
    <div className={`Modal__Content ${style.ModalAbout}`}>
      <div className='Modal__TitleBar'>
        <h1 className='Modal__Title'>
          Image annotation tool
        </h1>
        <button className='Modal__CloseButton' onClick={closeModal}>
          <FontAwesomeIcon icon={faTimes} />
        </button>
      </div>
      <div className='Modal__Body'>
        <p>
        This project was developed by <a href='https://rocek.dev' target='_blank' rel='noreferrer'>Martin Roček</a>, source code is available on <a href='https://github.com/silencesys/dh--image-annotation-tool' target='_blank' rel='noreferrer'>GitHub</a>. The project is licensed under the EUPL license.
        </p>
        <p>
        Version {packageJson.version}
        </p>
      </div>
    </div>
  )
}

export default ModalAbout

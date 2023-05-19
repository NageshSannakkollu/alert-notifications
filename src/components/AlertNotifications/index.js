// Write your code here
import {AiFillCheckCircle} from 'react-icons/ai'
import {RiErrorWarningFill} from 'react-icons/ri'
import {MdWarning, MdInfo} from 'react-icons/md'
import {GrFormClose} from 'react-icons/gr'
import Notification from '../Notification'
import './index.css'

const AlertNotifications = () => (
  <div className="alert-notification-container">
    <h1 className="heading">Alert Notifications</h1>
    <div>
      <Notification>
        <div className="notification-container">
          <AiFillCheckCircle className="success-icon" />
          <div className="heading-description-container">
            <h1 className="success-heading">Success</h1>
            <p>You can access all the files in the folder</p>
          </div>
          <GrFormClose className="close-icon" />
        </div>
      </Notification>
      <Notification>
        <div className="notification-container">
          <RiErrorWarningFill className="error-icon" />
          <div className="heading-description-container">
            <h1 className="error-heading">Error</h1>
            <p>
              Sorry, you are not authorized to have access to delete the file
            </p>
          </div>
          <GrFormClose className="close-icon" />
        </div>
      </Notification>
      <Notification>
        <div className="notification-container">
          <MdWarning className="warning-icon" />
          <div className="heading-description-container">
            <h1 className="warning-heading">Warning</h1>
            <p>Viewers of this file can see comments and suggestions</p>
          </div>
          <GrFormClose className="close-icon" />
        </div>
      </Notification>
      <Notification>
        <div className="notification-container">
          <MdInfo className="info-icon" />
          <div className="heading-description-container">
            <h1 className="info-heading">Info</h1>
            <p>Anyone on the internet can view these files</p>
          </div>
          <GrFormClose className="close-icon" />
        </div>
      </Notification>
    </div>
  </div>
)

export default AlertNotifications

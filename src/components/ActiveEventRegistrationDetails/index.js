// Write your code here
import './index.css'

const registrationStatusConstants = {
  yetToRegister: 'YET_TO_REGISTER',
  registered: 'REGISTERED',
  registrationClosed: 'REGISTRATION_CLOSED',
}

const ActiveEventRegistrationDetails = props => {
  const {activeEventStatus} = props

  const renderNoActiveView = () => (
    <p className="no-active">
      Click on an event, to view its registration details
    </p>
  )

  const renderYetToRegister = () => (
    <div className="view-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
        className="yet-to-register-img"
        alt=" yet to register"
      />
      <p className="para">
        A live performance brings so much to your relationship with dance.Seeing
        dance live can often make you fall totally in love with this beautiful
        art form.
      </p>
      <button type="button" className="register-btn">
        Register Here
      </button>
    </div>
  )

  const renderRegistered = () => (
    <div className="view-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
        alt="registered"
        className="registered-img"
      />
      <h1 className="para1">You have already registered for the event</h1>
    </div>
  )

  const renderRegistrationsClosed = () => (
    <div className="view-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
        alt="registrations closed"
        className="registration-closed-img"
      />
      <h1 className="head">Registrations Are Closed Now! </h1>
      <p className="para2">
        Stay tuned. We will reopen the registrations soon!
      </p>
    </div>
  )

  const renderRegistrationStatusView = () => {
    switch (activeEventStatus) {
      case registrationStatusConstants.yetToRegister:
        return renderYetToRegister()
      case registrationStatusConstants.registered:
        return renderRegistered()
      case registrationStatusConstants.registrationClosed:
        return renderRegistrationsClosed()
      default:
        return renderNoActiveView()
    }
  }

  return (
    <div className="registration-details-container">
      {renderRegistrationStatusView()}
    </div>
  )
}

export default ActiveEventRegistrationDetails

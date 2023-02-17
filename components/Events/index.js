import EventItem from '../EventItem'
import './index.css'

const eventsList = [
  {
    id: 'f9bb2373-b80e-46b8-8219-f07217b9f3ce',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/event-canada-dance-festival-img.png',
    name: 'Canada Dance Festival',
    location: 'Canada, America',
    registrationStatus: 'YET_TO_REGISTER',
  },
  {
    id: 'c0040497-e9cb-4873-baa9-ef5b994abfff',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/events-kathakali-img.png',
    name: 'Puthanalkkal Kalavela',
    location: 'Karnataka, India',
    registrationStatus: 'REGISTERED',
  },
  {
    id: '0037d5e4-4005-4030-987b-ce41b691b92a',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/events-kuchipudi-img.png',
    name: 'Nithyopahara',
    location: 'Kerala, India',
    registrationStatus: 'REGISTRATIONS_CLOSED',
  },
  {
    id: 'c9ff08cb-610c-4382-9939-78e5e50a72b2',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/events-bharatanatyam-img.png',
    name: 'Shivam',
    location: 'Andhra Pradesh, India',
    registrationStatus: 'YET_TO_REGISTER',
  },
  {
    id: 'd1153723-5b6e-4628-9a1a-ccd8f84f1273',
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/events-kolatam-img.png',
    name: 'Janapada Kolatam',
    location: 'Tamil Nadu, India',
    registrationStatus: 'REGISTERED',
  },
  {
    id: '7d6ec013-d0ae-4d84-b776-14b733a9174f',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/event-colonial-fest-img.png',
    name: 'Colonial Fest',
    location: 'Washington, America',
    registrationStatus: 'REGISTRATIONS_CLOSED',
  },
]

const eventRegistrationConstant = {
  initial: 'initial',
  yet_to_register: 'YET_TO_REGISTER',
  registered: 'REGISTERED',
  registration_closed: 'REGISTRATIONS_CLOSED',
}

class Events extends Component {
  state = {activeEvent: eventRegistrationConstant.initial}

  onClickEvent = status => {
    this.setState({activeEvent: status})
  }

  noView = () => (
    <p className="no1">Click on an event, to view its registration details</p>
  )

  renderRegisteredView = () => (
    <div className="act-card">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
        alt="registered"
        className="act-logo1"
      />
      <h1 className="no">You have already registered for the event</h1>
    </div>
  )

  renderRegisterNotYetView = () => (
    <div className="act-card">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
        alt="yet to register"
        className="act-logo1"
      />
      <p className="no-desc">
        A live performance brings so much to your relationship with dance.
        Seeing dance live can often make you fall totally in love with the
        beautiful art form.
      </p>
      <button className="act-button" type="button">
        Register Here
      </button>
    </div>
  )

  renderRegisterClosedView = () => (
    <div className="act-card">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png "
        alt="registrations closed"
        className="act-logo1"
      />
      <h1 className="no">Registrations Are Closed Now!</h1>
      <p className="no-desc">
        Stay tuned. We will reopen the registrations soon!
      </p>
    </div>
  )

  renderActiveCont = () => {
    const {activeEvent} = this.state
    switch (activeEvent) {
      case eventRegistrationConstant.registered:
        return this.renderRegisteredView()
      case eventRegistrationConstant.registration_closed:
        return this.renderRegisterClosedView()
      case eventRegistrationConstant.yet_to_register:
        return this.renderRegisterNotYetView()
      default:
        return this.noView()
    }
  }

  render() {
    return (
      <div className="bg-cont">
        <div className="events-card">
          <h1 className="events">Events</h1>
          <ul className="list-events">
            {eventsList.map(each => (
              <EventItem
                item={each}
                key={each.id}
                onClickEvent={this.onClickEvent}
              />
            ))}
          </ul>
        </div>
        <div className="active-events-card">{this.renderActiveCont()}</div>
      </div>
    )
  }
}
export default Events

// Write your JS code here
import './index.css'

const About = () => (
  <div className="about-container">
    <h1 className="about-heading">Our Services</h1>
    <div className="card-container">
      <div className="card1">
        <h1 className="h1">Application Development</h1>
        <p className="p1">
          J2EE Java 2 Platform, Enterprise Edition (J2EE) is a set of related
          specifications and documentation that define an enterprise-level
          computing architecture using the Java platform. Core components of
          J2EE are Enterprise JavaBeans (EJB), JavaServer Pages (JSP) and Java
          servlets and a host of interfaces—including JDBC, JNDI, JMS, and
          JTA—for linking to the information resources of an enterprise.
          Dedicated to enterprise software development, this architecture
          simplifies the development of component-based multitier applications
          and Web services. Using J2EE, applications that are portable,
          scalable, and interoperable can be built easily. Portal Development
          Quickly deliver information to your customers, partners, and employees
          on-time, easily, and efficiently. Manage your assets and streamline
          your business processes under one solution. Vignette portal
          development and content management. .NET The Microsoft .NET framework
          is a software development.
        </p>
      </div>
      <div className="card2">
        <h1 className="h2">Software Training</h1>
        <p className="p2">
          We also provide training on the following skills Java/J2EE, .NET,
          Oracle, Service Oriented Architecrure(SOA), Cloud Computing(Hadoop),
          Netezza, Hyperion Essbase And Planning, CRM, ERP, SQL Server, PHP,
          Vignette, Software Quality Assurance, HTML, Weblogic Admin, Unix/Linux
          Administration.
        </p>
      </div>
      <div className="card3">
        <h1 className="h3">Mobile Services</h1>
        <p className="p3">
          Amrutha Systems offers various Mobile Services that allows you to
          accelerate your mobile app development by providing a turnkey way to
          structure storage, authenticate users, and send push notifications.
          With SDKs for Windows, Android, iOS, and HTML as well as a powerful
          and flexible REST API, Mobile Services lets you to build connected
          applications for any platform and deliver a consistent experience
          across devices.
        </p>
      </div>
    </div>
  </div>
)

export default About

import myPic from "../images/my_pic.jpg";

function Header() {
  return (
    <header>
      <img src={myPic} width="100%" height="50%" alt="He or She smiling" />
      <h2 className="personName">Ismail Musharaf</h2>
      <h4 className="title">Software Engineer</h4>
      <h6 className="websiteLink">ismailmushraf.com</h6>
      <div className="socialProfile" id="email">
        <i class="fa fa-envelope-square" aria-hidden="true"></i>
        <span>Email</span>
      </div>
      <div className="socialProfile" id="linkedIn">
        <i class="fa fa-linkedin-square" aria-hidden="true"></i>
        <span>LinkedIn</span>
      </div>
    </header>
  );
}

export default Header;

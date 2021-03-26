<template>
    <div>
        <b-container>
      <div>
        <b-navbar toggleable="lg" type="light">
    <b-navbar-brand href="#" class="logo">
      <img src="../assets/new_logo.svg" alt="logo"></b-navbar-brand>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-navbar-nav class="ml-auto">
        <b-nav-form>
          <div class="button-routes" >
          <a href="#" class="link">Home</a>
          <a href="#" class="link">Sign in</a>
          <button class="register">
          <a href="#" class="link2">Register Now</a>
          </button>
          </div>
        </b-nav-form>
      </b-navbar-nav>
        </b-navbar>
      </div>
        </b-container>

        <b-container>
      <div class="article">
        <div class="text">
          <h2>Ever had a Dream<br/><span>of Becoming a Software</span>
          <br/><span class="engineer">Engineer?</span></h2>
          <p>Join enyata academy today and bring your long<br/> awaiting dream to reality.</p>
          <button>Register Now</button>
        </div>
        <div class="image">
          <img src="../assets/home-image.svg" alt="">
        </div>
      </div>
        </b-container>

        <b-container>
      <div class="why">
        <span class="line"></span>
        <h5>Why</h5>
      </div>
        </b-container>

        <b-container>
      <div class="services">
        <div class="service-one">
          <h6>Learn from the best</h6>
          <p>Amet minim mollit non deserunt ullamco est sit aliqua
            dolor do amet sint. Velit officia consequat duis enim velit mollit.
            Exercitation amet.</p>
        </div>
        <div class="service-two">
          <h6>100% online classes</h6>
            <p>Amet minim mollit non deserunt ullamco est sit aliqua
            dolor do amet sint. Velit officia consequat duis enim velit mollit.
            Exercitation amet.</p>
        </div>
        <div class="service-one">
          <h6>Get paid while learning</h6>
          <p>Amet minim mollit non deserunt ullamco est sit aliqua
            dolor do amet sint. Velit officia consequat duis enim velit mollit.
            Exercitation amet.</p>
        </div>
        <div class="service-two">
          <h6>Work on real project</h6>
          <p>Amet minim mollit non deserunt ullamco est sit aliqua
            dolor do amet sint. Velit officia consequat duis enim velit mollit.
            Exercitation amet.</p>
        </div>
      </div>
        </b-container>

        <b-container-fluid>
      <div id="footer">
          <p>Copyright © Enyata 2021</p>
      </div>
        </b-container-fluid>
    </div>
</template>

<style scoped>
.button-routes{
  display: flex;
  gap: 40px;
}
.register{
  width: 144px;
  height: 48px;
  border: 1px solid #7557d3;
  background: #fff;
}
.link, .link2{
  font-weight: 400;
  font-style: normal;
  font-size: 16px;
  color: #2B3C4E;
  text-decoration: none;
  text-align: center;
  padding: 10px 17px;
}
.link2{
  color: #7557d3;
  text-align: center;
  margin: auto;
}
.article{
  margin-top: 100px;
  display: flex;
  justify-content: space-between;
}
.image{
  width: 582px;
  height: 490px;
}
.image img{
  width: 100%;
  height: 100%;
}
.text{
  text-align: left;
  margin: auto 0;
}
.text h2{
  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  line-height: 57px;
  letter-spacing: 0.035em;
  color: #211F26;
}
.engineer{
  color: #7557d3;
}
.text p{
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 30px;
  letter-spacing: 0.02em;
  color: rgba(33, 31, 38, 0.71);
  margin-top: 23px;
}
.text button{
  width: 152px;
  height: 48px;
  border: 1px solid #7557d3;
  background: #7557d3;
  color: #fff;
  outline: none;
  border-radius: 4px;
  margin-top: 32px;
}
.why{
  margin: 134px 0px 40px 0px;
  display: flex;
  gap: 16px;
}
.line{
  border: 1px solid #fdc840;
  height: 2px;
  width: 34px;
  align-self: center;
}
.why h5{
  font-style: normal;
font-weight: bold;
font-size: 24px;
line-height: 140%;
letter-spacing: 0.01em;

color: #211F26;
}
.services{
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  width: 100%;
  height: 202px;
  box-sizing: border-box;
}
.service-one{
  padding: 24px;
  background: rgba(117, 87, 211, 0.1);
}
.service-two{
  padding: 24px;
  background: #ffffff;
}
.service-one h6, .service-two h6{
  font-weight: 500;
  font-size: 16px;
}
.service-one p, .service-two p{
  margin-top: 12px;
  font-size: 14px;
  font-weight: 400;
  color: #2B3C4E;
}
#footer{
  background: #7557d3;
  width:100%;
  height: 150px;
}
#footer p{
  text-align: center;
  padding-top: 60px;
  font-size: 14px;
  font-weight: 400;
  color: #fff;
}
</style>

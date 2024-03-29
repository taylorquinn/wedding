import React from "react";
import plane from "../assets/images/plane.png";
import van from "../assets/images/van.png";
import car from "../assets/images/car.png";
import vista1 from "../assets/images/sched-vista1.jpg";
import vista2 from "../assets/images/sched-vista2.jpg";
import hotel from "../assets/images/laMariposa.jpg";
import hostel from "../assets/images/hostel.jpg";
import airbnb from "../assets/images/airbnb.jpg";

import { getDaysRemaining, getGuestInfo } from "./utilities";

import { useAuth } from "./auth";
import "./Home.css";

export const Home = (): JSX.Element => {
  let auth = useAuth();

  const daysRemaining = getDaysRemaining();

  return (
    <div className="home">
      <div className="header">
        <h1 className="names">Taylor & Nick</h1>
        <h1 className="date">March 5-6, 2023</h1>
        <h1 className="date">MANUEL ANTONIO, COSTA RICA</h1>
      </div>
      <div className="part1">
        {auth.guest?.announceOnly ? (
          <div id="letter-announce" className="letter">
            <p>
              Hi {auth.guest?.name}
              {auth.guest?.partner && " and " + auth.guest?.partner}!
            </p>
            <p>
              In planning our wedding, we realized just how blessed we are to
              have so many loved ones that we cherish deeply in our lives.
              <br /> While we have elected to have a small destination wedding,
              we both feel that we couldn’t properly celebrate without sharing
              this moment with you.
              <br />
              <br /> We would love if you would join us virtually to share in
              the ceremony and have a toast to our union.
              <br />
              <br /> The ceremony will start promptly at <b>3:50 pm Central Time (4:50 ET)</b> with the processional.
              We will start the Zoom at <b>3:30 CT (4:30 ET)</b>, to allow for time for people to join. We hope
              to see you there! If there are any technical difficulties, do not worry. We will be recording the
              ceremony and will send out a video afterwards. 
              <br />
              <br />

              <a href="https://urmc.zoom.us/j/99085598299"><b>Click here to join the zoom at 3:30 CT on Monday March 6.</b></a>
              <br />
              <br /> We have also received a few questions about a registry - as we are planning to move abroad
              in the next year, we are not in need of normal registry items. If you would like to contribute towards
              our next chapter, we have created a <a href="https://www.travelersjoy.com/taylorandnick2023/">honeymoon fund registry online.</a> We truly are just excited to
              get to celebrate with you!
              <br />


            </p>
            <p>With love,</p>
            <p className="signature">Taylor + Nick</p>
          </div>
        ) : (
          <div id="letter-guest" className="letter">
            <p>
              Hi {auth.guest?.name}
              {auth.guest?.partner && " and " + auth.guest?.partner}!
            </p>
            <p>
              Welcome{auth.guest?.room && " to the house"}!! As we began
              planning this wedding, we decided that the most important thing to
              us was having quality time with the people we love the most in
              this world.
              <br /> As you might expect from us, we decided the best place in
              the world to do just that would be in a place full of natural
              beauty.
              <br /> We are delighted to invite you to our wedding and can't
              wait to see you in Costa Rica for a memorable occasion full of
              dancing, good food, and great vibes.
            </p>
            <p>With love,</p>
            <p className="signature">Taylor + Nick</p>
            <br />
            FAQs:
            <br />
            <b> Is my shuttle from the airport confirmed?</b>
            <br /> Yes! Let us know if you need the confirmation resent.
            <br />
            <br />  <b>What should I pack?</b>
            <br />  🥂 Wedding day attire (see below)
            <br />   🌊 Swimsuits!
            <br />    🐠 Reef safe (mineral) sunscreen - <a href="https://www.amazon.com/All-Good-Sports-Sunscreen-Combo/dp/B07GNTX91J/ref=sr_1_6?keywords=all+good+sunscreen&qid=1675561360&sr=8-6">this one is our favorite</a>
            <br />   🦟 Bug spray (travel sized!)
            <br />    😎 Sunglasses
            <br />    🤿 Vacation wear
            <br />   <br />
            <b> What should I wear on the boat for the welcome dinner on Sunday?</b>
            <br />  Think yacht party - swimsuit + cute cove-rup 🛥️ (eyepatches strictly forbidden .. seriously 🏴‍☠️)
            <br />
            <br /> <b> How am I getting to the boat for the welcome dinner on Sunday?</b>
            <br />   We will have shuttles to bring guests to and from the boat in Quepos -- pick up locations to be announced.
            <br />
            <br /> <b> What should I wear to the wedding on Monday?</b>
            <br />   Ladies: Think <a href="https://www.brides.com/cocktail-attire-wedding-4844364">cocktail</a> - midi-dress, long dress, jumpsuit, etc, all are welcome.
            If you're stuck on what color, feel free to choose something in the blues and greens.
            For shoes - the ceremony is on the beach, so keep that in mind. Dressy sandals / shorter block heels recommended.
            <br />  Men: The groom will be wearing a full suit with no tie; generally jacket + tie are not required,
            but long slacks + dress shirt requested. Nice shoes recommended, please avoid sandals.
            <br />
            <br /> <b>  Are you registered anywhere?</b>
            <br /> Your presence at our big day is present enough! However, if you would like to contribute towards
            our next chapter, we have created a <a href="https://www.travelersjoy.com/taylorandnick2023/">honeymoon fund registry online.</a> We truly are just excited to
            get to celebrate with you!
          </div>
        )}
        <a  href="https://urmc.zoom.us/j/99085598299">
          <button
            className="countdown"

          >
            <h2 className="countTitle">The fun begins in:</h2>
            <h1 className="count">{daysRemaining} days</h1>
            <h1 className="rsvp">Join Ceremony on Zoom</h1>
          </button></a>
      </div>
      {!auth.guest?.announceOnly && (
        <>
          <div className="header-pic">
            <div className="custom-shape-divider-top-1644170982">
              <svg
                data-name="Layer 1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1200 120"
                preserveAspectRatio="none"
              >
                <path
                  d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
                  className="shape-fill"
                  style={{ fill: "none" }}
                ></path>
              </svg>
            </div>
            <div className="custom-shape-divider-bottom">
              <svg
                data-name="Layer 1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1200 120"
                preserveAspectRatio="none"
              >
                <path
                  d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
                  className="shape-fill"
                ></path>
              </svg>
            </div>
          </div>
          <div
            id="schedule"
            style={{ textAlign: "center", backgroundColor: "white" }}
          >
            <h1 className="title">The Schedule</h1>
            <div className="schedule">
              {auth.guest?.room && (
                <div id="Saturday" className="day">
                  <div className="schedule-pic s0"></div>
                  <h1 className="schedule-date">Saturday</h1>
                  <h1 className="event-title">Check in!</h1>
                  <h2 className="event-time">3:00PM</h2>
                  <h2 className="event-location">*House guests only*</h2>
                  <p>
                    Make your way down to Costa Rica! House check in is at
                    3:00PM and the chef will have a lovely first dinner waiting
                    for you when you arrive :)
                  </p>
                </div>
              )}
              <div id="Sunday" className="day">
                <div className="schedule-pic s1"></div>
                <h1 className="schedule-date">Sunday</h1>
                <h1 className="event-title">Sunset Sail</h1>
                <h2 className="event-time">
                  1:00PM - 6:00PM (pickup time TBD)
                </h2>
                <h2 className="event-location">Playa Escondida</h2>
                <p className="event-text">
                  Wear a swim suit & join us for a welcome dinner + drinks on a
                  catamaran
                </p>
                <h1 className="event-title">Bonfire</h1>
                <h2 className="event-time">6:00PM - 9:00PM</h2>
                <h2 className="event-location">Playa Escondida</h2>
                <p className="event-text">
                  Not ready to turn in yet? Neither are we. Stay on the beach
                  for a bonfire and smores
                </p>
              </div>
              <div id="Monday" className="day">
                <div className="schedule-pic s2"></div>

                <h1 className="schedule-date">Monday</h1>

                <div className="agenda">
                  <h1 className="event-title">Ceremony</h1>
                  <h2 className="event-time">3:30PM</h2>
                  <h2 className="event-location">Playa Playita</h2>
                  <p className="event-text">
                    Meet us on the beach for a short ceremony in the shade.
                    Attire: cocktail. There will be a shuttle from La Mariposa
                    (time coming soon).
                  </p>
                  <h1 className="event-title">Reception</h1>
                  <h2 className="event-time">6:00PM</h2>
                  <h2 className="event-location">Vista Hermosa Estate</h2>
                  <p className="event-text">
                    Join us for drinks, laughter, dancing
                  </p>
                </div>
              </div>
              <div id="Tuesday" className="day">
                <div className="schedule-pic s3"></div>

                <h1 className="schedule-date">Tuesday</h1>
                <h1 className="event-title">Beach Picnic</h1>
                <h2 className="event-time">1:00PM</h2>
                <p className="event-text">
                  If you're still in town, feel free to join us on the beach for
                  a super casual picnic!
                </p>
              </div>
              {auth.guest?.room && (
                <>
                  <div id="Wednesday" className="day">
                    <div className="schedule-pic s4"></div>
                    <h1 className="schedule-date">Wednesday</h1>
                    <h1 className="event-title">Relaxation Station</h1>
                    <h2 className="event-time">2:00PM</h2>
                    <p className="event-text">
                      Time for a chill day!! We will be doing yoga at 2 if
                      anyone wants to join!
                    </p>
                  </div>
                  <div id="Thursday" className="day">
                    <div className="schedule-pic s5"></div>
                    <h1 className="schedule-date">Thursday</h1>
                    <h1 className="event-title">Post-wedding Bach</h1>
                    <h2 className="event-time">2:00PM</h2>
                    <h2 className="event-location">*House guests only*</h2>
                    <p className="event-text">
                      We know we're already married, but let's face it - we like
                      to do things a little different. Let's celebrate our youth
                      and our marriage.
                    </p>
                  </div>
                  <div id="Friday" className="day">
                    <div className="schedule-pic s6"></div>
                    <h1 className="schedule-date">Friday</h1>
                    <h1 className="event-title">Last Day Best Day</h1>
                    <h2 className="event-time">1:00PM</h2>
                    <p className="event-text">Best last day ever!!</p>
                  </div>
                  <div id="Saturday" className="day">
                    <div className="schedule-pic s7"></div>
                    <h1 className="schedule-date">Saturday</h1>
                    <h1 className="event-title">Checkout</h1>
                    <h2 className="event-time">10:00AM</h2>
                    <p className="event-text">
                      Sadly, it's time to say goodbye and head back to real
                      life.
                    </p>
                  </div>
                </>
              )}
            </div>
          </div>
          <div className="header-pic h2">
            <div className="custom-shape-divider-top-1644170982">
              <svg
                data-name="Layer 1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1200 120"
                preserveAspectRatio="none"
              >
                <path
                  d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
                  className="shape-fill"
                ></path>
              </svg>
            </div>
            <div className="custom-shape-divider-bottom">
              <svg
                data-name="Layer 1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1200 120"
                preserveAspectRatio="none"
              >
                <path
                  d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
                  className="shape-fill"
                ></path>
              </svg>
            </div>
          </div>
          <div
            id="gettingThere"
            style={{ textAlign: "center", backgroundColor: "white" }}
          >
            <h1 className="title">Getting There</h1>
            <div className="line"></div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2012332.1996741348!2d-84.80486988785029!3d9.937335239256859!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x29a5b3adfdf379f5!2sManuel%20Antonio!5e0!3m2!1sen!2sus!4v1644188457796!5m2!1sen!2sus"
              // width="600"
              height="450"
              className="map"
              allowFullScreen={false}
              loading="lazy"
            ></iframe>
            <div className="transport-container">
              <div className="transport">
                <img src={plane} className="icon" />
                <h2>Fly into San José (SJO)</h2>
                <p>
                  The largest nearby aiport is San José (SJO; not the one in
                  California!). From there it is a 3-4 hour drive to Manuel
                  Antonio. From the west coast, you will probably find that a
                  red-eye is ideal.
                </p>
                <a
                  className="button-74"
                  target="_blank"
                  href="https://www.skyscanner.com/transport/flights/sfo/sjoa/220218/220226/?adultsv2=1&cabinclass=economy&childrenv2=&inboundaltsenabled=false&outboundaltsenabled=false&preferdirects=false&rtn=1"
                >
                  Find flights
                </a>
              </div>
              <div className="transport">
                <img src={van} className="icon" />
                <h2>Shuttle</h2>
                <p>
                  There are both private (~$150) and shared shuttles (~$42-$50
                  each) that run from SJO to Manuel Antonio. Please contact
                  Susan (susan@mavrentals.com) for help with coordination. She
                  will group guests together based on arrival time to help with
                  costs!
                </p>
              </div>
              <div className="transport">
                <img src={car} className="icon" />
                <h2>Rental Car</h2>
                <p>
                  We highly recommend taking a shuttle from SJO to Manuel
                  Antonio. Once you get to Manuel Antonio, you won't really need
                  a car to get around - taxis are easy to find. The roads are
                  fairly pot-holed and renting a car in Costa Rica can get
                  expensive. If you do want to rent a car, make sure to book
                  ahead of time and keep an eye on the required insurances.
                </p>
              </div>
            </div>
          </div>
          <div className="header-pic h3">
            <div className="custom-shape-divider-top-1644170982">
              <svg
                data-name="Layer 1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1200 120"
                preserveAspectRatio="none"
              >
                <path
                  d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
                  className="shape-fill"
                ></path>
              </svg>
            </div>
            <div className="custom-shape-divider-bottom">
              <svg
                data-name="Layer 1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1200 120"
                preserveAspectRatio="none"
              >
                <path
                  d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
                  className="shape-fill2"
                ></path>
              </svg>
            </div>
          </div>
          {auth.guest?.room ? (
            <div
              id="accomodations"
              style={{ textAlign: "center", backgroundColor: "#f6f6f6" }}
            >
              <h1 className="title">Accomodations - Vista Hermosa</h1>
              <div className="note">
                <div className="letter2">
                  <h2>
                    {auth.guest?.name}
                    {auth.guest?.partner && " and " + auth.guest?.partner}!
                  </h2>
                  <p style={{ textAlign: "left" }}>
                    When we started planning this wedding, we realized we could
                    not get excited about a giant 5 hour party somewhere. What
                    we wanted most was to have our close friends and families
                    together for enough time to actually enjoy it. When
                    searching for a place to make this possible, we came across
                    Vista Hermosa and it was the perfect fit.
                    <br />
                    <br />
                    There is nothing we would like more than to have you close
                    to celebrate this week (which in addition to including our
                    wedding, will subsitute for our bach parties!), and as such
                    there is a place reserved in Vista Hermosa for you. Vista
                    Hermosa is a lovely estate that overlooks the water, has a
                    private path to a beach, and a private chef that will cook
                    breakfast and dinner daily.
                    <br />
                    <br />
                    We are covering the majority of the cost of the house as
                    part of our wedding budget. There is an additional fee per
                    person for the week, which we are asking guests to cover.
                    <br />
                    <br />
                    We have reserved a bed for you in{" "}
                    <b>{auth.guest?.room.roomName}</b>
                    <i> (see middle picture) </i>
                    {auth.guest?.room.roommate ? (
                      <>
                        with <b>{auth.guest?.room.roommate}.</b>
                      </>
                    ) : (
                      <>.</>
                    )}
                    <br />
                  </p>
                  <div className="cost">
                    <h3 className="costs">7 day costs per person</h3>
                    <br />
                    <hr style={{ width: "272px", float: "left" }} />
                    <br />
                    <h3 className="costs">
                      Accomodation, chef, maid-service:
                    </h3>
                    <p className="costs"> 595</p>
                    <br />
                    <h3 className="costs">Food and drink:</h3>
                    <p className="costs"> 200</p>
                    <br />
                    <hr style={{ width: "272px", float: "left" }} />
                    <br />
                    <h3 className="costs">Total: </h3>
                    <p className="costs">795 / person</p>
                    <br />
                    <h3 className="costs">
                      If you're planning to stay in the house with us, please
                      send your total payment to Taylor via Zelle by 12/15.
                    </h3>
                    <p style={{ fontStyle: "italic" }}>
                      ** All of that being said, we totally get if this is not
                      up your alley, and you'd rather stay somewhere nearby!
                      Just let us know and we can offer suggestions!! The most
                      important thing to us is that you enjoy yourself 😊 If you
                      find you can only stay for part of the week, also let us
                      know!
                    </p>
                  </div>
                  <a
                    className="button-74"
                    href="https://vistahermosaestate.com/"
                    target="_blank"
                  >
                    View House
                  </a>
                </div>
                <div className="pictures">
                  <div className="pictures-background"></div>
                  <img className="pictures-1" src={vista1} />
                  <img className="pictures-2" src={auth.guest.room.roomImage} />
                  <img className="pictures-3" src={vista2} />
                </div>
              </div>
              <iframe
                className="video"
                src="https://www.youtube.com/embed/vQ_2BPYlrcQ?autoplay=0&mute=1&loop=1"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          ) : (
            <>
              <div
                id="accomodations"
                style={{ textAlign: "center", backgroundColor: "#f6f6f6" }}
              >
                <h1 className="title">Accomodations</h1>
                <div style={{ display: "flex", flexWrap: "wrap" }}>
                  <div className="hotel">
                    <img src={hotel} />
                    <h2>La Mariposa or Shana by the Beach</h2>
                    <h3></h3>
                    <p>
                      Both of these hotels have rave reviews. They are each
                      about a 5 min walk to the reception space and 15 min walk
                      to the beach.
                    </p>
                    <a
                      className="button-74"
                      target="_blank"
                      href="https://www.booking.com/searchresults.html?aid=356929&label=metagha-link-MRUS-hotel-391272_dev-desktop_los-1_bw-15_dow-Thursday_defdate-1_room-0_gstadt-2_rateid-ein1us_aud-7205078777_gacid-6623578701_mcid-10_ppa-0_clrid-0_ad-1_gstkid-0_checkin-20221124__lp-1014221_r-156879641674606014&sid=0e86c898fc4022a64caf66124d323c52&sb=1&src=searchresults&src_elem=sb&error_url=https%3A%2F%2Fwww.booking.com%2Fsearchresults.html%3Faid%3D356929%26label%3Dmetagha-link-MRUS-hotel-391272_dev-desktop_los-1_bw-15_dow-Thursday_defdate-1_room-0_gstadt-2_rateid-ein1us_aud-7205078777_gacid-6623578701_mcid-10_ppa-0_clrid-0_ad-1_gstkid-0_checkin-20221124__lp-1014221_r-156879641674606014%26sid%3D0e86c898fc4022a64caf66124d323c52%26tmpl%3Dsearchresults%26checkin_month%3D3%3Bcheckin_monthday%3D4%3Bcheckin_year%3D2023%3Bcheckout_month%3D3%3Bcheckout_monthday%3D8%3Bcheckout_year%3D2023%3Bclass_interval%3D1%3Bdest_id%3D900048717%3Bdest_type%3Dcity%3Bdtdisc%3D0%3Bfrom_sf%3D1%3Bgroup_adults%3D2%3Bgroup_children%3D0%3Bhighlighted_hotels%3D391272%3Bhp_sbox%3D1%3Binac%3D0%3Bindex_postcard%3D0%3Blabel_click%3Dundef%3Bno_rooms%3D1%3Boffset%3D0%3Bpostcard%3D0%3Braw_dest_type%3Dcity%3Broom1%3DA%252CA%3Bsb_price_type%3Dtotal%3Bshw_aparth%3D1%3Bslp_r_match%3D0%3Bsrc%3Dhotel%3Bsrc_elem%3Dsb%3Bsrpvid%3D5ac12bed7d1e0082%3Bss%3DManuel%2520Antonio%3Bss_all%3D0%3Bssb%3Dempty%3Bsshis%3D0%3Bssne%3DManuel%2520Antonio%3Bssne_untouched%3DManuel%2520Antonio%26%26&highlighted_hotels=391272&ss=Manuel+Antonio&is_ski_area=0&ssne=Manuel+Antonio&ssne_untouched=Manuel+Antonio&city=900048717&checkin_year=2023&checkin_month=3&checkin_monthday=4&checkout_year=2023&checkout_month=3&checkout_monthday=8&group_adults=2&group_children=0&no_rooms=1&from_sf=1"
                    >
                      Book Hotel
                    </a>
                  </div>
                  <div className="hotel">
                    <img src={hostel} />
                    <h2>Selina Manuel Antonio</h2>
                    <h3>$50-$120 / night</h3>
                    <p>
                      For a really cool hostel experience, this one is a great
                      choice. It has a beautiful coworking space if you aren't
                      able to take off the whole time from work but still want
                      to come!
                    </p>
                    <a
                      className="button-74"
                      target="_blank"
                      href="https://www.booking.com/hotel/cr/selina-manuel-antonio.html?label=gen173bo-1DCAsoM0IKbWFuZ28tbW9vbkgzWANotAKIAQGYATG4AQfIAQzYAQPoAQH4AQqIAgGYAgKoAgO4Aufhh5AGwAIB0gIkMzZmN2E0NDYtMTM2MC00YmU2LWE5NGMtNWMwZDMyYjAzNGZm2AIE4AIB&sid=56778b183c6a78bc1eb30faeb8a54704&aid=304142&ucfs=1&arphpl=1&checkin=2023-03-04&checkout=2023-03-08&dest_id=900048717&dest_type=city&group_adults=2&req_adults=2&no_rooms=1&group_children=0&req_children=0&hpos=1&hapos=1&sr_order=popularity&srpvid=96b426d3cf070025&srepoch=1644298281&soh=1&from=searchresults#no_availability_msg"
                    >
                      Book Hostel
                    </a>
                  </div>
                  <div className="hotel">
                    <img src={airbnb} />
                    <h2>Airbnb</h2>
                    <h3>$95 - $300 / night</h3>
                    <p>
                      There are many gorgeous places on airbnb that can be split
                      amongst guests. If you want to be paired up with other
                      guests--
                      <a
                        target="_blank"
                        className="whatsappLink"
                        href="https://chat.whatsapp.com/EYPV0eSaF3sHZ6tZTsW0cv"
                      >
                        join this Whatsapp Group.
                      </a>
                    </p>
                    <a
                      className="button-74"
                      target="_blank"
                      href="https://www.airbnb.com/s/Manuel-Antonio--Quepos--Provincia-de-Puntarenas--Costa-Rica/homes?tab_id=home_tab&refinement_paths%5B%5D=%2Fhomes&flexible_trip_dates%5B%5D=february&flexible_trip_dates%5B%5D=march&flexible_trip_lengths%5B%5D=weekend_trip&date_picker_type=calendar&query=Manuel%20Antonio%2C%20Quepos%2C%20Provincia%20de%20Puntarenas%2C%20Costa%20Rica&place_id=ChIJx1lfVH1xoY8RzroyZ2opBls&checkin=2023-03-04&checkout=2023-03-08&adults=2&source=structured_search_input_header&search_type=filter_change&ne_lat=9.40468104792584&ne_lng=-84.1554514987912&sw_lat=9.399663897978572&sw_lng=-84.16145964698455&zoom=17&search_by_map=true"
                    >
                      Book Airbnb
                    </a>
                  </div>
                </div>
              </div>
            </>
          )}
          <div className="header-pic h4">
            <div className="custom-shape-divider-top-1644170982">
              <svg
                data-name="Layer 1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1200 120"
                preserveAspectRatio="none"
              >
                <path
                  d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
                  className="shape-fill2"
                ></path>
              </svg>
            </div>
            <div className="custom-shape-divider-bottom">
              <svg
                data-name="Layer 1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1200 120"
                preserveAspectRatio="none"
              >
                <path
                  d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
                  className="shape-fill"
                ></path>
              </svg>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

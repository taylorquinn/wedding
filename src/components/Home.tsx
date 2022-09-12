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
import { Rsvp } from "./rsvp";

export const Home = (): JSX.Element => {
  let auth = useAuth();

  //  const guestInfo = getGuestInfo(auth.guest!.name.toLowerCase());
  const daysRemaining = getDaysRemaining();

  return (
    <div className="home">
      <div className="header">
        <h1 className="names">Taylor & Nick</h1>
        <h1 className="date">March 5-6, 2023</h1>
        <h1 className="date">MANUEL ANTONIO, COSTA RICA</h1>
      </div>
      <div className="part1">
        <div className="letter">
          <p>
            Hi {auth.guest?.name}
            {auth.guest?.partner && " and " + auth.guest?.partner}!
          </p>
          <p>
            Welcome{auth.guest?.room && " to the house"}!! We are so excited to
            have you join us for this special occasion.
          </p>
          <p>With love,</p>
          <p className="signature">Taylor + Nick</p>
        </div>
        <button
          className="countdown"
          onClick={() => {
            document.getElementById("rsvp")!.scrollIntoView();
          }}
        >
          <h2 className="countTitle">The fun begins in:</h2>
          <h1 className="count">{daysRemaining} days</h1>
          <h1 className="rsvp">RSVP</h1>
        </button>
      </div>
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
        {/* <div id="Saturday" className="day">
          <img src={plane} className="icon"></img>
          <h1 className="date">Saturday</h1>
        </div> */}
        <div className="schedule">
          {auth.guest?.room && (
            <div id="Saturday" className="day">
              <div className="schedule-pic s0"></div>
              <h1 className="schedule-date">Saturday</h1>
              <h1 className="event-title">Check in!</h1>
              <h2 className="event-time">3:00PM</h2>
              <h2 className="event-location">*House guests only*</h2>
              <p>
                Make your way down to Costa Rica! House check in is at 3:00PM
                and the chef will have a lovely first dinner waiting for you
                when you arrive :)
              </p>
            </div>
          )}
          <div id="Sunday" className="day">
            {/*} <img src={boat} className="icon"></img>*/}
            <div className="schedule-pic s1"></div>
            {/*<img src={boat2}></img>*/}

            <h1 className="schedule-date">Sunday</h1>
            <h1 className="event-title">Sunset Sail</h1>
            <h2 className="event-time">1:00PM - 6:00PM (pickup time TBD)</h2>
            <h2 className="event-location">Playa Escondida</h2>
            <p className="event-text">
              Wear a swim suit & join us for a welcome dinner + drinks on a
              catamaran
            </p>
            <h1 className="event-title">Bonfire</h1>
            <h2 className="event-time">6:00PM - 9:00PM</h2>
            <h2 className="event-location">Playa Escondida</h2>
            <p className="event-text">
              Not ready to turn in yet? Neither are we. Stay on the beach for a
              bonfire and smores
            </p>
          </div>
          <div id="Monday" className="day">
            {/*} <img src={champagne} className="icon"></img>*/}
            <div className="schedule-pic s2"></div>

            <h1 className="schedule-date">Monday</h1>

            <div className="agenda">
              <h1 className="event-title">Ceremony</h1>
              <h2 className="event-time">3:30PM</h2>
              <h2 className="event-location">Playa Playita</h2>
              <p className="event-text">
                Meet us on the beach for a short ceremony in the shade. Attire:
                cocktail. There will be a shuttle from La Mariposa (time coming
                soon).
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
            {/* <img src={sun} className="icon"></img>*/}
            <div className="schedule-pic s3"></div>

            <h1 className="schedule-date">Tuesday</h1>
            <h1 className="event-title">Beach Picnic</h1>
            <h2 className="event-time">1:00PM</h2>
            <p className="event-text">
              If you're still in town, feel free to join us on the beach for a
              super casual picnic!
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
                  Time for a chill day!! We will be doing yoga at 2 if anyone
                  wants to join!
                </p>
              </div>
              <div id="Thursday" className="day">
                <div className="schedule-pic s5"></div>
                <h1 className="schedule-date">Thursday</h1>
                <h1 className="event-title">Post-wedding Bach</h1>
                <h2 className="event-time">2:00PM</h2>
                <h2 className="event-location">*House guests only*</h2>
                <p className="event-text">
                  We know we're already married, but let's face it - we like to
                  do things a little different. Let's celebrate our youth and
                  our marriage.
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
                  Sadly, it's time to say goodbye and head back to real life.
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
              California!). From there it is a 3-4 hour drive to Manuel Antonio.
              From the west coast, you will probably find that a red-eye is
              ideal.
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
              There are both private (~$150) and shared shuttles (~$42-$50 each)
              that run from SJO to Manuel Antonio. Please contact Susan
              (susan@mavrentals.com) for help with coordination. She will group
              guests together based on arrival time to help with costs!
            </p>
          </div>
          <div className="transport">
            <img src={car} className="icon" />
            <h2>Rental Car</h2>
            <p>
              We highly recommend taking a shuttle from SJO to Manuel Antonio.
              Once you get to Manuel Antonio, you won't really need a car to get
              around - taxis are easy to find. The roads are fairly pot-holed
              and renting a car in Costa Rica can get expensive. If you do want
              to rent a car, make sure to book ahead of time and keep an eye on
              the required insurances.
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
                When we started planning this wedding, we realized we could not
                get excited about a giant 5 hour party somewhere. What we wanted
                most was to have our close friends and families together for
                enough time to actually enjoy it. When searching for a place to
                make this possible, we came across Vista Hermosa and it was the
                perfect fit.
                <br />
                <br />
                There is nothing we would like more than to have you close to
                celebrate this week (which in addition to including our wedding,
                will subsitute for our bach parties!), and as such there is a
                place reserved in Vista Hermosa for you. Vista Hermosa is a
                lovely estate that overlooks the water, has a private path to a
                beach, and a private chef that will cook breakfast and dinner
                daily.
                <br />
                <br />
                We are covering the majority of the cost of the house as part of
                our wedding budget. There is an additional fee per person for
                the week, which we are asking guests to cover.
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
                  Accomodation, chef, maid-service and gratutities:
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
                <p style={{ fontStyle: "italic" }}>
                  ** All of that being said, we totally get if this is not up
                  your alley, and you'd rather stay somewhere nearby! Just let
                  us know and we can offer suggestions!! The most important
                  thing to us is that you enjoy yourself 😊 If you find you can
                  only stay for part of the week, also let us know!
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
                <h2>La Mariposa</h2>
                <h3>Room block- discounted price coming soon</h3>
                <p>
                  This hotel has rave reviews and a pool. It is a 5 min walk to
                  the reception space and 15 min walk to the beach. We will
                  provide a shuttle to this hotel for those who wish to avail of
                  it. We have a room block organized at this hotel, more details
                  coming soon.
                </p>
                {/* <a
                  className="button-74"
                  target="_blank"
                  href="https://www.booking.com/hotel/cr/mango-moon.html?aid=304142&label=gen173bo-1DCAsoM0IKbWFuZ28tbW9vbkgzWANotAKIAQGYATG4AQfIAQzYAQPoAQH4AQqIAgGYAgKoAgO4Aufhh5AGwAIB0gIkMzZmN2E0NDYtMTM2MC00YmU2LWE5NGMtNWMwZDMyYjAzNGZm2AIE4AIB&sid=56778b183c6a78bc1eb30faeb8a54704&sb=1&src=hotel&src_elem=sb&error_url=https%3A%2F%2Fwww.booking.com%2Fhotel%2Fcr%2Fmango-moon.html%3Faid%3D304142%3Blabel%3Dgen173bo-1DCAsoM0IKbWFuZ28tbW9vbkgzWANotAKIAQGYATG4AQfIAQzYAQPoAQH4AQqIAgGYAgKoAgO4Aufhh5AGwAIB0gIkMzZmN2E0NDYtMTM2MC00YmU2LWE5NGMtNWMwZDMyYjAzNGZm2AIE4AIB%3Bsid%3D56778b183c6a78bc1eb30faeb8a54704%3Ball_sr_blocks%3D126747804_85017829_0_1_0%3Bcheckin%3D2022-12-03%3Bcheckout%3D2022-12-04%3Bdest_id%3D900048717%3Bdest_type%3Dcity%3Bdist%3D0%3Bgroup_adults%3D2%3Bgroup_children%3D0%3Bhapos%3D1%3Bhighlighted_blocks%3D126747804_85017829_0_1_0%3Bhpos%3D1%3Bmatching_block_id%3D126747804_85017829_0_1_0%3Bno_rooms%3D1%3Breq_adults%3D2%3Breq_children%3D0%3Broom1%3DA%252CA%3Bsb_price_type%3Dtotal%3Bsr_order%3Dpopularity%3Bsr_pri_blocks%3D126747804_85017829_0_1_0__8640%3Bsrepoch%3D1644294631%3Bsrpvid%3D7ed91fb24d4c00b2%3Btype%3Dtotal%3Bucfs%3D1%26%3B&highlighted_hotels=1267478&hp_sbox=1&origin=hp&hp_avform=1&do_availability_check=on&stay_on_hp=1&highlighted_blocks=126747804_85017829_0_1_0&checkin_year=2023&checkin_month=3&checkin_monthday=4&checkout_year=2023&checkout_month=3&checkout_monthday=8&group_adults=2&group_children=0&no_rooms=1&b_h4u_keep_filters=&from_sf=1#availability_target"
                >
                  Book Hotel
                </a> */}
              </div>
              <div className="hotel">
                <img src={hostel} />
                <h2>Selina Manuel Antonio</h2>
                <h3>$50-$120 / night</h3>
                <p>
                  For a really cool hostel experience, this one is a great
                  choice. It has a beautiful coworking space if you aren't able
                  to take off the whole time from work but still want to come!
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
                  amongst guests. If you want to be paired up with other guests,
                  let us know and we can help make that happen.
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
      <Rsvp guestInfo={auth.guest!} />
    </div>
  );
};

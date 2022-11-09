import { Guest } from "./utilities";
import * as React from "react";

type IRsvpProps = { guestInfo: Guest };
type RequestObject = {
  guest: string;
  partner: string;
  guestRsvp: string;
  partnerRsvp: string;
  guestSail: string;
  partnerSail: string;
  guestPicnic: string;
  partnerPicnic: string;
  food: string;
  guestBoatFood: string;
  partnerBoatFood: string;
  houseChoice: string;
  houseQ: string;
  accomodationConnect: string;
  accomodationFamilyChoice: string;
  accomodationConnectChoice: string;
  song: string;
};
const translateForm = (input: FormDataEntryValue | null): string =>
  input === null ? "yes" : "no";

export const Rsvp = (props: IRsvpProps): JSX.Element => {
  const [submitted, setSubmitted] = React.useState(false);
  const submitRSVP = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);

    let formData = new FormData(event.currentTarget);
    const requestObject: RequestObject = {
      guest: props.guestInfo.name,
      partner: props.guestInfo.partner || "n/a",
      guestRsvp: translateForm(formData.get("guestRsvp")),
      partnerRsvp: props.guestInfo.partner
        ? translateForm(formData.get("partnerRsvp"))
        : "n/a",
      guestSail: translateForm(formData.get("guestSail")),
      partnerSail: props.guestInfo.partner
        ? translateForm(formData.get("partnerSail"))
        : "n/a",
      guestPicnic: translateForm(formData.get("guestPicnic")),
      partnerPicnic: props.guestInfo.partner
        ? translateForm(formData.get("partnerPicnic"))
        : "n/a",
      food: formData.get("foodRsvp") as string,
      guestBoatFood: formData.get("guestBoatFood") as string,
      partnerBoatFood: formData.get("partnerBoatFood") as string,
      houseChoice: formData.get("house") as string,
      houseQ: formData.get("houseQ") as string,
      accomodationConnect: translateForm(formData.get("accomodationConnect")),
      accomodationConnectChoice: formData.get(
        "accomodationConnectChoice"
      ) as string,
      accomodationFamilyChoice: formData.get("accomodationFamily") as string,
      song: formData.get("song") as string,
    };
    makeInsertRequest(requestObject);
    console.log(requestObject);
  };

  return (
    <div id="rsvp">
      <h1 className="title" style={{ textAlign: "center" }}>
        rsvp
      </h1>
      <form
        style={{ display: submitted ? "none" : "block" }}
        className="rsvp-form"
        onSubmit={submitRSVP}
      >
        <h2>please only rsvp once, unless something has changed!</h2>

        <>
          <h2>SUNDAY ⛵️ afternoon welcome sail?</h2>
          <div className="named-question">
            <label className="rsvp-name">
              {props.guestInfo && props.guestInfo.partner
                ? props.guestInfo.name
                : "RSVP"}
            </label>
            <div className="button r" id="button-3">
              <input name="guestSail" type="checkbox" className="checkbox" />
              <div className="knobs"></div>
              <div className="layer"></div>
            </div>
          </div>
          {props.guestInfo.partner && (
            <div className="named-question">
              <label className="rsvp-name">{props.guestInfo.partner}</label>
              <div className="button r" id="button-3">
                <input
                  name="partnerSail"
                  type="checkbox"
                  className="checkbox"
                />
                <div className="knobs"></div>
                <div className="layer"></div>
              </div>
            </div>
          )}
        </>
        <>
          <h2>MONDAY 🥂 Wedding ceremony and reception? </h2>
          <div className="named-question">
            <label className="rsvp-name">
              {props.guestInfo.partner ? props.guestInfo.name : "RSVP"}
            </label>
            <div className="button r" id="button-3">
              <input name="guestRsvp" type="checkbox" className="checkbox" />
              <div className="knobs"></div>
              <div className="layer"></div>
            </div>
          </div>
          {props.guestInfo.partner && (
            <div className="named-question">
              <label className="rsvp-name">{props.guestInfo.partner}</label>
              <div className="button r" id="button-3">
                <input
                  name="partnerRsvp"
                  type="checkbox"
                  className="checkbox"
                />
                <div className="knobs"></div>
                <div className="layer"></div>
              </div>
            </div>
          )}
        </>
        <>
          <h2>TUESDAY 🏝 beach picnic?</h2>
          <div className="named-question">
            <label className="rsvp-name">
              {props.guestInfo.partner ? props.guestInfo.name : "RSVP"}
            </label>
            <div className="button r" id="button-3">
              <input name="guestPicnic" type="checkbox" className="checkbox" />
              <div className="knobs"></div>
              <div className="layer"></div>
            </div>
          </div>
          {props.guestInfo.partner && (
            <div className="named-question">
              <label className="rsvp-name">{props.guestInfo.partner}</label>
              <div className="button r" id="button-3">
                <input
                  name="partnerPicnic"
                  type="checkbox"
                  className="checkbox"
                />
                <div className="knobs"></div>
                <div className="layer"></div>
              </div>
            </div>
          )}
        </>
        <>
          <h2>Which meal would you prefer for the welcome sail?</h2>
          <div style={{ paddingLeft: "16px" }}>
            {props.guestInfo.partner && <p>{props.guestInfo.name}</p>}
            <input
              type="radio"
              name="guestBoatFood"
              value="chicken"
              id="chicken"
            />
            <label htmlFor="chicken">Sauteed chicken breast</label>
            <br />
            <input type="radio" name="guestBoatFood" value="fish" id="fish" />
            <label htmlFor="fish">Fresh fish filet of the day with salsa</label>
            <br />
            <input
              type="radio"
              name="guestBoatFood"
              value="cauliflower-curry"
              id="cauliflower-curry"
            />
            <label htmlFor="cauliflower-curry">Cauliflower coconut curry</label>
            {props.guestInfo.partner && (
              <>
                <p>{props.guestInfo.partner}</p>
                <input
                  type="radio"
                  name="partnerBoatFood"
                  value="chicken"
                  id="chicken-partner"
                />
                <label htmlFor="chicken-partner">Sauteed chicken breast</label>
                <br />
                <input
                  type="radio"
                  name="partnerBoatFood"
                  value="fish"
                  id="fish-partner"
                />
                <label htmlFor="fish-partner">
                  Fresh fish filet of the day with salsa
                </label>
                <br />
                <input
                  type="radio"
                  name="partnerBoatFood"
                  value="cauliflower-curry"
                  id="cauliflower-curry-partner"
                />
                <label htmlFor="cauliflower-curry-partner">
                  Cauliflower coconut curry
                </label>
              </>
            )}
          </div>
        </>
        <h2>Any dietary restrictions? </h2>
        <input
          name="foodRsvp"
          type="text"
          className="rsvp-input-box"
          placeholder=""
        />
        <br />
        {props.guestInfo.room ? (
          <>
            <h2>Are you interested in staying in the house?</h2>
            <input
              type="radio"
              name="house"
              id="house_yes"
              value="house- yes"
            />
            <label htmlFor="house_yes">Yes!!</label>
            <br />
            <input
              type="radio"
              id="house_part"
              name="house"
              value="house-part of the time"
            />
            <label htmlFor="house_part">Yes, but not the whole time</label>
            <br />
            <input
              type="radio"
              name="house"
              id="house_nope"
              value="house- nope"
            />
            <label htmlFor="house_nope">Nope</label>
            <br />
            <input
              type="radio"
              id="house_maybe"
              name="house"
              value="house- not sure yet"
            />
            <label htmlFor="house_maybe">Not yet sure</label>
            <h2>Any questions, comments or concerns about the house?</h2>
            <input
              name="houseQ"
              type="text"
              className="rsvp-input-box"
              placeholder=""
            />
          </>
        ) : !props.guestInfo.isFamily ? (
          <>
            <h2>
              Would you be interested in connecting with our other friends to
              find nearby airbnbs?
              <a
                target="_blank"
                className="whatsappLink"
                href="https://chat.whatsapp.com/EYPV0eSaF3sHZ6tZTsW0cv"
              >
                Join Whatsapp Group
              </a>
            </h2>
            <div className="button r" id="button-3">
              <input
                name="accomodationConnect"
                type="checkbox"
                className="checkbox"
              />
              <div className="knobs"></div>
              <div className="layer"></div>
            </div>
            <>
              <h2>Have you chosen accomodation?</h2>
              <input
                name="accomodationConnectChoice"
                type="text"
                className="rsvp-input-box"
                placeholder="yes- we're staying at ... or not yet!"
              />
            </>
          </>
        ) : (
          <>
            <h2>Have you chosen accomodation?</h2>
            <input
              name="accomodationFamily"
              type="text"
              className="rsvp-input-box"
              placeholder="yes- we're staying at ... or not yet!"
            />
          </>
        )}
        <br />
        <h2>What song MUST we play at our reception?</h2>
        <input
          name="song"
          type="text"
          className="rsvp-input-box"
          placeholder=""
        />

        <button className="button-74" type="submit">
          Submit
        </button>
      </form>
      <h2
        style={{ display: submitted ? "block" : "none", textAlign: "center" }}
      >
        Thanks for RSVP-ing!
      </h2>
    </div>
  );
};

const makeInsertRequest = (request: RequestObject) => {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  fetch(
    "https://v1.nocodeapi.com/ktayquinn/google_sheets/HvILgkqKceoxvWiJ/addRows?tabId=Sheet1",
    {
      method: "post",
      headers: myHeaders,
      redirect: "follow",
      body: JSON.stringify([request]),
    }
  )
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.log("error", error));
};

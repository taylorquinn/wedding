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
  houseChoice: string;
  houseQ: string;
  accomodationConnect: string;
  accomodationFamilyChoice: string;
  accomodationConnectChoice: string;
  song: string;
};
const translateForm = (input: FormDataEntryValue | null): string =>
  input === null ? "yes" : "no";

const getHouseChoice = (formData: FormData): string => {
  if (formData.get("house_yes")) {
    return "yes";
  }
  if (formData.get("house_part")) {
    return "part";
  }
  if (formData.get("house_nope")) {
    return "nope";
  }
  if (formData.get("house_maybe")) {
    return "maybe";
  }
  return "---";
};

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
      houseChoice: getHouseChoice(formData),
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
              {props.guestInfo.partner ? props.guestInfo.name : "RSVP"}
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

        <h2>Any food restrictions? </h2>
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
            <input type="radio" id="html" name="house_yes" value="HTML" />
            <label>Yes!!</label>
            <br />
            <input
              type="radio"
              id="javascript"
              name="house_part"
              value="JavaScript"
            />
            <label>Yes, but not the whole time</label>
            <br />
            <input type="radio" id="css" name="house_nope" value="CSS" />
            <label>Nope</label>
            <br />
            <input
              type="radio"
              id="javascript"
              name="house_maybe"
              value="JavaScript"
            />
            <label>Not yet sure</label>
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

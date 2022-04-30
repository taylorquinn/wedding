import { Guest } from "./utilities";

type IRsvpProps = { guestInfo: Guest };
type RequestObject = {
  guest: string;
  guestRsvp: string;
  partnerRsvp: string;
  food: string;
  house: string;
};

export const Rsvp = (props: IRsvpProps): JSX.Element => {
  const submitRSVP = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    let formData = new FormData(event.currentTarget);
    let guestRsvp =
      (formData.get("guestRsvp") as string) == "on" ? "yes" : "no";
    let partnerRsvp = formData.get("partnerRsvp") as string;
    let food = formData.get("foodRsvp") as string;
    let house = (formData.get("foodRsvp") as string) || "---";

    const requestObject: RequestObject = {
      guest: props.guestInfo.name,
      guestRsvp,
      partnerRsvp,
      food,
      house,
    };
    // makeInsertRequest(requestObject);
    console.log(requestObject);
  };

  return (
    <div id="rsvp">
      <h1 className="title" style={{ textAlign: "center" }}>
        rsvp
      </h1>
      <form className="rsvp-form" onSubmit={submitRSVP}>
        <h2>Who will be joining us? </h2>
        <input name="guestRsvp" type="checkbox" className="rsvp-input" />
        <label>{props.guestInfo.name}</label>
        <br />
        {props.guestInfo.partner && (
          <>
            <input name="partnerRsvp" type="checkbox" className="rsvp-input" />
            <label>{props.guestInfo.partner} </label>
            <br />
          </>
        )}
        <h2>Any food restrictions? </h2>
        <input
          name="foodRsvp"
          type="text"
          className="rsvp-input-box"
          placeholder=""
        />
        <br />
        {props.guestInfo.room && (
          <form>
            <h2>Are you interested in staying in the house?</h2>
            <input type="radio" id="html" name="fav_language" value="HTML" />
            <label>Yes!!</label>
            <br />
            <input
              type="radio"
              id="javascript"
              name="fav_language"
              value="JavaScript"
            />
            <label>Yes, but not the whole time</label>
            <br />
            <input type="radio" id="css" name="fav_language" value="CSS" />
            <label>Nope</label>
            <br />
            <input
              type="radio"
              id="javascript"
              name="fav_language"
              value="JavaScript"
            />
            <label>Not yet sure</label>
          </form>
        )}
        <br />
        <button className="button-74" type="submit">
          Submit
        </button>
      </form>
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

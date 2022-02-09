import { guestInfo } from "./utilities";

type IRsvpProps = { guestInfo: guestInfo };
type RequestObject = { name: string; food: string };

export const Rsvp = (props: IRsvpProps): JSX.Element => {
  const submitRSVP = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    let formData = new FormData(event.currentTarget);
    let guestRsvp =
      (formData.get("guestRsvp") as string) == "on" ? "yes" : "no";
    let partnerRsvp = formData.get("partnerRsvp") as string;
    let foodRsvp = formData.get("foodRsvp") as string;

    const requestObject: RequestObject = {
      name: props.guestInfo.guest,
      food: guestRsvp,
    };
    // makeInsertRequest(requestObject);
    console.log(requestObject);
  };

  return (
    <div id="rsvp" style={{ textAlign: "center" }}>
      <h1 className="title">rsvp</h1>
      <form className="rsvp-form" onSubmit={submitRSVP}>
        <h2>Who will be joining us? </h2>
        <label>
          {props.guestInfo.guest}
          <input name="guestRsvp" type="checkbox" className="rsvp-input" />
        </label>
        {props.guestInfo.partner && (
          <label>
            {props.guestInfo.partner}
            <input name="partnerRsvp" type="checkbox" className="rsvp-input" />
          </label>
        )}
        <label>
          Any food requirements?
          <input
            name="foodRsvp"
            type="text"
            className="rsvp-input"
            placeholder=""
          />
        </label>
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

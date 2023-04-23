// const image = "../images/1616699300_58-p-zhdun-krasivo-61.jpg";
import imge from "../images/1616699300_58-p-zhdun-krasivo-61.jpg";
export default function Home() {
    return (
      <div>
        <h1>
        Phone book welcome page{' '}
        <br/>
          <span role="img" aria-label="Greeting icon">
            <img src={imge} alt="wait" width="600" />
          </span>
        </h1>
      </div>
    );
  }
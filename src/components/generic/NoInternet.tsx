import { useNavigate, useLocation } from "react-router-dom";
import { images } from "../../config/configuration";
import apis from "../../config/api";

const NoInternet = () => {
  const navigate = useNavigate();
  let location = useLocation();

  const validateUser = (redirectPath: any) => {
    var userToken = localStorage.getItem("token");
    userToken &&
      userToken.length > 0 &&
      apis
        .getUserDetails()
        .then(({ data }) => {
          navigate("/");
        })
        .catch((err) => {
          alert(
            "Server is not up yet! Please try again later or in a few minutes"
          );
        });
  };

  return (
    <div className="container d-flex flex-column justify-content-center align-items-center pb-5 mb-5">
      <img
        src={images.no_internet}
        style={{ width: 300 }}
        className="mt-5 pt-5 img-fluid"
      />
      <span className="text-center">
        <h3>Internet Connection Lost! </h3>
        <br />{" "}
        <h6 className="col-12 px-3">
          Looks like you device has lost internet connection. Please connect to
          a strong internet connections and try again.
        </h6>
      </span>
      <button
        type="button"
        className="bg-success my-4 px-5"
        onClick={() => {
          if (navigator.onLine) {
            if (location && location.state) {
              const { redirectPath } = location.state as {
                redirectPath: string;
              };
              if (redirectPath === "/routes") {
              } else {
                navigate(redirectPath);
              }
            } else {
              navigate("/");
            }
          } else {
            alert(
              "Server is not up yet! Please try again later or in a few minutes"
            );
          }
        }}
      >
        TRY AGAIN
      </button>
    </div>
  );
};

export default NoInternet;

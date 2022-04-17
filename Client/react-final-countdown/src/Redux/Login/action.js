export const LOGIN_LOADING = "LOGIN_LOADING";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

export const loginLoading = () => ({
  type: LOGIN_LOADING,
});

export const loginSuccess = (payload) => ({
  type: LOGIN_SUCCESS,
  payload, // we get payload from the response
});

export const loginFailure = () => ({
  type: LOGIN_FAILURE,
});

// This login is working because of "Thunk" Middleware.. Passing in "store" {const middleware = [thunk]}
// Thunk will help you to make network request in action

export const login =
  ({ username, password }) =>
  (dispatch) => {
    dispatch(loginLoading());
    fetch(`https://masai-api-mocker.herokuapp.com/auth/login`, {
      method: "POST",
      body: JSON.stringify({ username, password }), // => De-Structuring the userDetails by {username , password} SAME in "19th Line"
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) =>
        dispatch(
          loginSuccess({
            username,
            token: res.token,
          }),
        ),
      )
      .catch((err) => dispatch(loginFailure()));
  };

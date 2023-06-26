import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import useApi from "../../hooks/useApi";
import { useDispatch } from "react-redux";

export default function LoginPage() {
  const api = useApi();
  const dispatch = useDispatch();

  /**
   * Formdan data almanın birden fazla yöntemi vardır. Bu yöntemler şunlardır:
   * 1- Her input için state kullanmak.
   * 2- Formun tamamını json objesine çevirmek. (Henüz bunu görmedik, birazdan göreceğiz.)
   * 3- Formik veya react-hook-form gibi bir kütüphane kullanmak.
   *
   */

  /**
   * 1- Her input için state kullanma yöntemi: Bu yöntemde farzedelimki onlarca inputumuz
   *    olsun, bu durumda her onChange eventı için component tekrar render edileceğinden
   *    dolayı büyük bir performans kaybına sebep olur. Bu sebepten dolayı bu yöntemin
   *    kullanılmaması gerekiyor.
   */
  //const [email, setEmail] = useState("");

  console.log(">> Login Page Render oldu.");

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="page-content">
              <div className="main-banner">
                <div className="row justify-content-center">
                  <div className="col-lg-7">
                    <div className="header-text">
                      <form
                        onSubmit={async (event) => {
                          event.preventDefault();
                          // Burada formu json objesine çevireceğiz. Bunun için en önemli şart
                          // her inputun `name` property'sinin set edilmiş olması gerekiyor.

                          /**
                           * FormData class'ı tarayıcılarda builtin şekilde gelir. Bu class
                           * parametre olarak bir html form elemanı alır. Sonra bu formun
                           * içerisindeki name property'sine sahip olan tüm input, hidden input,
                           * checkbox, select, textarea gibi elemanları FormData nesnesine çevirir.
                           */
                          const formData = new FormData(event.currentTarget);
                          const formJson = Object.fromEntries(
                            formData.entries()
                          );

                          console.log(">> Form Json", formJson);
                          // >> Form Json {email: 'c20@user.com', password: '123123'}

                          const authResponse = await api.post(
                            "auth/login",
                            formJson
                          );

                          console.log(">> Auth REsp", authResponse);
                          // token: c4ea6c5a99ca72a2cdbc4e02784fd84a
                        }}
                      >
                        <h6>Login Form</h6>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Label className="text-white">
                            Email address
                          </Form.Label>
                          <Form.Control
                            type="email"
                            placeholder="Enter email"
                            name="email"
                          />
                          <Form.Text className="text-white">
                            We'll never share your email with anyone else.
                          </Form.Text>
                        </Form.Group>

                        <Form.Group
                          className="mb-3"
                          controlId="formBasicPassword"
                        >
                          <Form.Label className="text-white">
                            Password
                          </Form.Label>
                          <Form.Control
                            type="password"
                            placeholder="Password"
                            name="password"
                          />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                          Submit
                        </Button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

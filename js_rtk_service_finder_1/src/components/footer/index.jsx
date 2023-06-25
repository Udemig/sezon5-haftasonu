import { ListGroup } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Footer() {
  const categoryState = useSelector((state) => state.categoryState);

  return (
    <>
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <p>
                Copyright © 2036 <a href="#">Cyborg Gaming</a> Company. All
                rights reserved.
                <br />
                Design:
                <a
                  href="https://templatemo.com"
                  target="_blank"
                  title="free CSS templates"
                >
                  TemplateMo
                </a>
                test
                <a href="https://themewagon.com" target="_blank">
                  ThemeWagon
                </a>
              </p>
            </div>
            <div className="col-lg-6">
              <strong>Kategoriler</strong>
              <ListGroup>
                {categoryState.categories.map((item, index) => {
                  if (index < 5) {
                    return (
                      <ListGroup.Item>
                        <Link
                          to={item.slug}
                          style={{ color: "black", fontWeight: "bold" }}
                        >
                          {item.name}
                        </Link>
                      </ListGroup.Item>
                    );
                  }

                  return null;
                })}
              </ListGroup>
              <ul>
                <li></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

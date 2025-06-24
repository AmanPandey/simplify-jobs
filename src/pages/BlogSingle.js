import React from "react";
import { Link } from "react-router-dom";

const BlogSingle = () => {
  return (
    <>
      <section
        className="section-hero overlay inner-page bg-image"
        style={{ backgroundImage: "url('images/hero_1.jpg')" }}
        id="home-section"
      >
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="custom-breadcrumbs mb-0">
                <span className="slash">Posted by</span> <span> Admin</span>
                <span className="mx-2 slash">&bullet;</span>
                <span className="text-white">
                  <strong>June 20, 2019</strong>
                </span>
              </div>
              <h1 className="text-white">
                Why Most SaaS Tools Fail Small Businesses
              </h1>
            </div>
          </div>
        </div>
      </section>

      <section className="site-section" id="next-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 blog-content">
              <h3 className="mb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit
              </h3>
              <p className="lead">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Assumenda nihil aspernatur nemo sunt, qui, harum repudiandae
                quisquam eaque dolore itaque quod tenetur quo quos labore?
              </p>
              <p>
                <img
                  src="images/job_single_img_1.jpg"
                  alt="Image"
                  className="img-fluid rounded"
                />
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae
                expedita cumque necessitatibus ducimus debitis totam, quasi
                praesentium eveniet tempore possimus illo esse, facilis?
                Corrupti possimus quae ipsa pariatur cumque, accusantium tenetur
                voluptatibus incidunt reprehenderit, quidem repellat sapiente,
                id, earum obcaecati.
              </p>

              <blockquote>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Provident vero tempora aliquam excepturi labore, ad soluta
                  voluptate necessitatibus. Nulla error beatae, quam, facilis
                  suscipit quaerat aperiam minima eveniet quis placeat.
                </p>
              </blockquote>

              <p>
                Eveniet deleniti accusantium nulla natus nobis nam asperiores
                ipsa minima laudantium vero cumque cupiditate ipsum ratione
                dicta, expedita quae, officiis provident harum nisi! Esse
                eligendi ab molestias, quod nostrum hic saepe repudiandae non.
                Suscipit reiciendis tempora ut, saepe temporibus nemo.
              </p>
              <h4 className="mt-5 mb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit
              </h4>
              <p>
                Accusamus, temporibus, ullam. Voluptate consectetur laborum
                totam sunt culpa repellat, dolore voluptas. Quaerat cum ducimus
                aut distinctio sit, facilis corporis ab vel alias, voluptas
                aliquam, expedita molestias quisquam sequi eligendi nobis ea
                error omnis consequatur iste deleniti illum, dolorum odit.
              </p>
              <p>
                In adipisci corporis at delectus! Cupiditate, voluptas, in
                architecto odit id error reprehenderit quam quibusdam excepturi
                distinctio dicta laborum deserunt qui labore dignissimos
                necessitatibus reiciendis tenetur corporis quas explicabo
                exercitationem suscipit. Nisi quo nulla, nihil harum obcaecati
                vel atque quos.
              </p>
              <p>
                Amet sint explicabo maxime accusantium qui dicta enim quia,
                nostrum id libero voluptates quae suscipit dolor quam tenetur
                dolores inventore illo laborum, corporis non ex, debitis quidem
                obcaecati! Praesentium maiores illo atque error! Earum, et,
                fugit. Sint, delectus molestiae. Totam.
              </p>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa
                iste, repudiandae facere aperiam sapiente, officia delectus
                soluta molestiae nihil corporis animi quos ratione qui labore?
                Sint eaque perspiciatis minus illum.
              </p>
              <p>
                Consectetur porro odio quod iure quaerat cupiditate similique,
                dolor reprehenderit molestias provident, esse dolorum omnis
                architecto magni amet corrupti neque ratione sunt beatae
                perspiciatis? Iste pariatur omnis sed ut itaque.
              </p>
              <p>
                Id similique, rem ipsam accusantium iusto dolores sit velit ex
                quas ea atque, molestiae. Sint, sed. Quisquam, suscipit!
                Quisquam quibusdam maiores fugiat eligendi eius consequuntur,
                molestiae saepe commodi expedita nemo!
              </p>

              <div className="pt-5">
                <h3 className="mb-5">6 Comments</h3>
                <ul className="comment-list">
                  <li className="comment">
                    <div className="vcard bio">
                      <img src="images/person_2.jpg" alt="Image placeholder" />
                    </div>
                    <div className="comment-body">
                      <h3>Jacob Smith</h3>
                      <div className="meta">January 9, 2018 at 2:21pm</div>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Pariatur quidem laborum necessitatibus, ipsam
                        impedit vitae autem, eum officia, fugiat saepe enim
                        sapiente iste iure! Quam voluptas earum impedit
                        necessitatibus, nihil?
                      </p>
                      <p>
                        <Link to="#" className="reply">
                          Reply
                        </Link>
                      </p>
                    </div>
                  </li>

                  <li className="comment">
                    <div className="vcard bio">
                      <img src="images/person_3.jpg" alt="Image placeholder" />
                    </div>
                    <div className="comment-body">
                      <h3>Chris Meyer</h3>
                      <div className="meta">January 9, 2018 at 2:21pm</div>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Pariatur quidem laborum necessitatibus, ipsam
                        impedit vitae autem, eum officia, fugiat saepe enim
                        sapiente iste iure! Quam voluptas earum impedit
                        necessitatibus, nihil?
                      </p>
                      <p>
                        <Link to="#" className="reply">
                          Reply
                        </Link>
                      </p>
                    </div>

                    <ul className="children">
                      <li className="comment">
                        <div className="vcard bio">
                          <img
                            src="images/person_5.jpg"
                            alt="Image placeholder"
                          />
                        </div>
                        <div className="comment-body">
                          <h3>Chintan Patel</h3>
                          <div className="meta">January 9, 2018 at 2:21pm</div>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Pariatur quidem laborum necessitatibus, ipsam
                            impedit vitae autem, eum officia, fugiat saepe enim
                            sapiente iste iure! Quam voluptas earum impedit
                            necessitatibus, nihil?
                          </p>
                          <p>
                            <Link to="#" className="reply">
                              Reply
                            </Link>
                          </p>
                        </div>

                        <ul className="children">
                          <li className="comment">
                            <div className="vcard bio">
                              <img
                                src="images/person_1.jpg"
                                alt="Image placeholder"
                              />
                            </div>
                            <div className="comment-body">
                              <h3>Jean Doe</h3>
                              <div className="meta">
                                January 9, 2018 at 2:21pm
                              </div>
                              <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Pariatur quidem laborum
                                necessitatibus, ipsam impedit vitae autem, eum
                                officia, fugiat saepe enim sapiente iste iure!
                                Quam voluptas earum impedit necessitatibus,
                                nihil?
                              </p>
                              <p>
                                <Link to="#" className="reply">
                                  Reply
                                </Link>
                              </p>
                            </div>

                            <ul className="children">
                              <li className="comment">
                                <div className="vcard bio">
                                  <img
                                    src="images/person_4.jpg"
                                    alt="Image placeholder"
                                  />
                                </div>
                                <div className="comment-body">
                                  <h3>Ben Afflick</h3>
                                  <div className="meta">
                                    January 9, 2018 at 2:21pm
                                  </div>
                                  <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit. Pariatur quidem laborum
                                    necessitatibus, ipsam impedit vitae autem,
                                    eum officia, fugiat saepe enim sapiente iste
                                    iure! Quam voluptas earum impedit
                                    necessitatibus, nihil?
                                  </p>
                                  <p>
                                    <Link to="#" className="reply">
                                      Reply
                                    </Link>
                                  </p>
                                </div>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>

                  <li className="comment">
                    <div className="vcard bio">
                      <img src="images/person_1.jpg" alt="Image placeholder" />
                    </div>
                    <div className="comment-body">
                      <h3>Jean Doe</h3>
                      <div className="meta">January 9, 2018 at 2:21pm</div>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Pariatur quidem laborum necessitatibus, ipsam
                        impedit vitae autem, eum officia, fugiat saepe enim
                        sapiente iste iure! Quam voluptas earum impedit
                        necessitatibus, nihil?
                      </p>
                      <p>
                        <Link to="#" className="reply">
                          Reply
                        </Link>
                      </p>
                    </div>
                  </li>
                </ul>

                <div className="comment-form-wrap pt-5">
                  <h3 className="mb-5">Leave Link comment</h3>
                  <form action="#" className="">
                    <div className="form-group">
                      <label for="name">Name *</label>
                      <input type="text" className="form-control" id="name" />
                    </div>
                    <div className="form-group">
                      <label for="email">Email *</label>
                      <input type="email" className="form-control" id="email" />
                    </div>
                    <div className="form-group">
                      <label for="website">Website</label>
                      <input type="url" className="form-control" id="website" />
                    </div>

                    <div className="form-group">
                      <label for="message">Message</label>
                      <textarea
                        name=""
                        id="message"
                        cols="30"
                        rows="10"
                        className="form-control"
                      ></textarea>
                    </div>
                    <div className="form-group">
                      <input
                        type="submit"
                        value="Post Comment"
                        className="btn btn-primary btn-md"
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-lg-4 sidebar pl-lg-5">
              <div className="sidebar-box">
                <form action="#" className="search-form">
                  <div className="form-group">
                    <span className="icon fa fa-search"></span>
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      placeholder="Type Link keyword and hit enter"
                    />
                  </div>
                </form>
              </div>
              <div className="sidebar-box">
                <img
                  src="images/person_1.jpg"
                  alt="Image placeholder"
                  className="img-fluid mb-4 w-50 rounded-circle"
                />
                <h3>About The Author</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Ducimus itaque, autem necessitatibus voluptate quod mollitia
                  delectus aut, sunt placeat nam vero culpa sapiente consectetur
                  similique, inventore eos fugit cupiditate numquam!
                </p>
                <p>
                  <Link to="#" className="btn btn-primary btn-sm">
                    Read More
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="bg-image overlay-hiring fixed overlay"
        style={{ backgroundImage: "url('images/hiring.jpg')" }}
      >
        <div className="container">
          <div className="row align-items-center d-flex flex-column">
            <div className="col-md-8 mx-auto text-center align-items-center d-flex flex-column">
              <h2 className="" style={{ color: "rgba(137, 186, 22, 0.9)" }}>
                Built for You Built for Everyone
              </h2>
              <p className="mb-2 text-white lead">
                We help businesses like yours get precisely what they need —
                from web apps and dashboards to automations and mobile tools.
              </p>
              <button type="submit" className="btn btn-primary d-block">
                Contact us
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogSingle;

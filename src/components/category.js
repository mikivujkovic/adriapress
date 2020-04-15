import React from "react"
import { Icon } from "@iconify/react"
import facebookIcon from "@iconify/icons-cib/facebook"
import twitterIcon from "@iconify/icons-cib/twitter"
import "../styles/category.css"

class Category extends React.Component {
  constructor(props) {
    super(props)
    // Don't call this.setState() here!
    // this.state = { baseURL: "blog" }
    // this.handleClick = this.handleClick.bind(this)
    this.state = {
      start: 4,
      last: 7,
      end: 7,
      show: false,
      number: 0,
      additional: [],
    }
  }

  componentDidMount() {
    this.setState({
      number: this.props.data.length,
    })
  }

  moreClicked = () => {
    const beg = this.state.start
    const potential = parseInt(this.state.last)
    const kolicina = this.props.data.length
    const end = Math.min(potential, kolicina)
    const add = []
    for (var i = beg; i < end; i++) {
      add.push(this.props.data[i])
    }
    this.setState({
      additional: add,
      last: end + 3,
    })
  }

  render() {
    return (
      <div>
        <div id={this.props.title}></div>
        <div>
          <div className="big-card">
            <div className="naslov">{this.props.title}</div>
            <div className="prvi-postovi">
              <div className="left">
                <img
                  className="big-image"
                  src={this.props.data[0].thumbnail}
                  alt="big Image"
                />
                <div className="titleSection">
                  <div className="title">
                    <a
                      href={`blog${this.props.data[0].uri}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <h2>{this.props.data[0].title}</h2>
                    </a>
                    <div className="big-kategorija">
                      <span>{this.props.data[0].category}</span>
                    </div>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: this.props.data[0].excerpt,
                      }}
                    ></div>
                  </div>
                  <div className="ispodNaslova">
                    <div className="datum">{this.props.data[0].date}</div>
                    <div className="share">
                      <div className="facebook">
                        <a
                          href={`https://www.facebook.com/sharer/sharer.php?u=blog${this.props.data[0].uri}`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Icon icon={facebookIcon} />
                        </a>
                      </div>
                      <div className="facebook">
                        <a
                          className="twitter-share-button"
                          href={`https://twitter.com/intent/tweet?text=blog${this.props.data[0].uri}`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Icon icon={twitterIcon} />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="right">
                <div className="small-card">
                  <div>
                    <img
                      className="small-picture"
                      src={this.props.data[1].thumbnail}
                    />
                  </div>
                  <div className="saNaslovom">
                    <a
                      href={`blog${this.props.data[1].uri}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="naslovDesno">
                        {this.props.data[1].title}
                      </div>
                    </a>
                    <div className="kategorija">
                      <span>{this.props.data[1].category}</span>
                    </div>
                    <div
                      className="excerpt"
                      dangerouslySetInnerHTML={{
                        __html: this.props.data[1].excerpt,
                      }}
                    ></div>
                    <div className="poredNaslova">
                      <div className="datum">{this.props.data[1].date}</div>
                      <div className="share">
                        <div className="facebook">
                          <a
                            href={`https://www.facebook.com/sharer/sharer.php?u=blog${this.props.data[1].uri}`}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Icon icon={facebookIcon} />
                          </a>
                        </div>
                        <div className="facebook">
                          <a
                            className="twitter-share-button"
                            href={`https://twitter.com/intent/tweet?text=blog${this.props.data[1].uri}`}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Icon icon={twitterIcon} />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="small-card">
                  <div>
                    <img
                      className="small-picture"
                      src={this.props.data[2].thumbnail}
                    />
                  </div>
                  <div className="saNaslovom">
                    <a
                      href={`blog${this.props.data[2].uri}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="naslovDesno">
                        {this.props.data[2].title}
                      </div>
                    </a>
                    <div className="kategorija">
                      <span>{this.props.data[2].category}</span>
                    </div>
                    <div
                      className="excerpt"
                      dangerouslySetInnerHTML={{
                        __html: this.props.data[2].excerpt,
                      }}
                    ></div>
                    <div className="poredNaslova">
                      <div className="datum">{this.props.data[2].date}</div>
                      <div className="share">
                        <div className="facebook">
                          <a
                            href={`https://www.facebook.com/sharer/sharer.php?u=blog${this.props.data[2].uri}`}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Icon icon={facebookIcon} />
                          </a>
                        </div>
                        <div className="facebook">
                          <a
                            className="twitter-share-button"
                            href={`https://twitter.com/intent/tweet?text=blog${this.props.data[2].uri}`}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Icon icon={twitterIcon} />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="small-card">
                  <div>
                    <img
                      className="small-picture"
                      src={this.props.data[3].thumbnail}
                    />
                  </div>
                  <div className="saNaslovom">
                    <a
                      href={`blog${this.props.data[3].uri}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="naslovDesno">
                        {this.props.data[3].title}
                      </div>
                    </a>
                    <div className="kategorija">
                      <span>{this.props.data[3].category}</span>
                    </div>
                    <div
                      className="excerpt"
                      dangerouslySetInnerHTML={{
                        __html: this.props.data[3].excerpt,
                      }}
                    ></div>
                    <div className="poredNaslova">
                      <div className="datum">{this.props.data[3].date}</div>
                      <div className="share">
                        <div className="facebook">
                          <a
                            href={`https://www.facebook.com/sharer/sharer.php?u=blog${this.props.data[3].uri}`}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Icon icon={facebookIcon} />
                          </a>
                        </div>
                        <div className="facebook">
                          <a
                            className="twitter-share-button"
                            href={`https://twitter.com/intent/tweet?text=blog${this.props.data[3].uri}`}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Icon icon={twitterIcon} />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="additionalPosts">
            {null ||
              this.state.additional.map(post => (
                <div key={post.id}>
                  <div className="additional-card">
                    <img src={post.thumbnail} className="additional-image" />
                    <div className="podaci">
                      <a
                        href={`blog${post.uri}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <div className="additional-title">{post.title}</div>
                      </a>
                      <div className="additional-kategorija">
                        <span>{post.category}</span>
                      </div>
                      <div
                        className="excerpt-post"
                        dangerouslySetInnerHTML={{
                          __html: post.excerpt,
                        }}
                      ></div>
                      <div className="additional-data">
                        <div className="additional-datum">{post.date}</div>
                        <div className="additional-share">
                          <div className="facebook">
                            <a
                              href={`https://www.facebook.com/sharer/sharer.php?u=blog${post.uri}`}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <Icon icon={facebookIcon} />
                            </a>
                          </div>
                          <div className="facebook">
                            <a
                              className="twitter-share-button"
                              href={`https://twitter.com/intent/tweet?text=blog${post.uri}`}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <Icon icon={twitterIcon} />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
          <div className="more">
            {this.state.last <= this.props.data.length ? (
              <button onClick={this.moreClicked} className="more-button">
                VIŠE
              </button>
            ) : null}
          </div>
        </div>
      </div>
    )
  }
}

export default Category

// app.js
/** @jsx React.createElement */

function App() {
  return (
      <div className="app-skeleton">
          <header className="app-header">
              <div className="app-header__anchor">
                  <span className="app-header__anchor__text">Felipe Cezar</span>
              </div>
              <nav>
                  <ul className="nav">
                      {FIXTURES.headerMenu.map((navItem, navItemIndex) => (
                          <NavItem key={navItemIndex} navItem={navItem} />
                      ))}
                  </ul>
              </nav>
              <div />
          </header>         
          <div className="app-container">
              <div className="app-a">
                  <div className="segment-topbar">
                      <div className="segment-topbar__header">
                          <TextHeading3 className="segment-topbar__title">
                              Projetos
                          </TextHeading3>
                      </div>
                      <div className="segment-topbar__aside">
                          <div className="button-toolbar">
                              <a className="button button--primary button--size-lg">
                                  <IconFeedAdd className="button__icon" />
                              </a>
                          </div>
                      </div>
                  </div>

                  <form className="form-search" onSubmit={(e) => e.preventDefault()}>
                      <div className="form-group">
                          <div className="form-control form-control--with-addon">
                              <input name="query" placeholder="Pesquisar..." type="text" />
                              <div className="form-control__addon form-control__addon--prefix">
                                  <IconSearchSubmit />
                              </div>
                          </div>
                      </div>
                  </form>

                  <NavSection renderTitle={(props) => <h2 {...props}>Campos</h2>}>
                      <ChannelNav activeChannel={{ id: "a0cc", name: "Watson" }} channels={FIXTURES.feed} />
                  </NavSection>

                  <NavSection renderTitle={(props) => <h2 {...props}>Últimos Artigos</h2>}>
                      <ConversationNav conversations={FIXTURES.conversation} />
                  </NavSection>
              </div>
              <div className="app-main">
                  <div className="channel-feed">
                      <div className="segment-topbar">
                          <div className="segment-topbar__header">
                              <TextOverline className="segment-topbar__overline">Aqui estão meus projetos</TextOverline>
                              <TextHeading4 className="segment-topbar__title">
                                  <ChannelLink name="Projetos" />
                              </TextHeading4>
                          </div>
                          <div className="segment-topbar__aside">
                              <div className="button-toolbar">
                                  <a className="button button--default">
                                      <IconFeedMute className="button__icon" />
                                  </a>
                                  <a className="button button--default">
                                      <IconFeedSettings className="button__icon" />
                                  </a>
                                  <a className="button button--default">
                                      <IconMenuMore className="button__icon" />
                                  </a>
                              </div>
                          </div>
                      </div>
                      <div className="channel-feed__body">
                        {FIXTURES.projetos.map((projeto) => (
                          <FeedMessage key={projeto.id} message={projeto} />
                        ))}
                      </div>
                      
                      <div className="channel-feed__footer">
                          <form className="channel-message-form" action="#" onSubmit={(e) => e.preventDefault()}>
                              <div className="form-group">
                                  <label className="form-label" htmlFor="message">Mensagem</label>
                                  <div className="form-control">
                                      <textarea id="message" className="form-control" name="message"></textarea>
                                  </div>
                              </div>
                              <div className="form-footer">
                                  <Button size="xl" type="submit" variant="primary">Enviar</Button>
                              </div>
                          </form>
                      </div>
                  </div>
              </div>
              
              
              <div className="app-b">
                  <Pad>
                      <TextHeading3 as="h4">Quem sou eu?</TextHeading3>
                      <TextParagraph1>
                          Eu <em>Felipe Cezar</em> sou um desenvolvedor fullstack com foco em backend.
                      </TextParagraph1>
                      <TextParagraph1>
                          Meu objetivo é conseguir um bom emprego e um dia poder trabalhar remotamente.
                      </TextParagraph1>
                  </Pad>
              </div>
          </div>
      </div>
  );
}
  
function NavSection({ children, renderTitle }) {
  return (
      <div className="nav-section">
          <div className="nav-section__header">
              {renderTitle({ className: "nav-section__title" })}
          </div>
          <div className="nav-section__body">{children}</div>
      </div>
  );
}
  
function FeedMessage({ message: projeto }) {
  return (
      <div className="message">
          <div className="message__body">
              <div>{projeto.content}</div>
          </div>
          <div className="message__footer">
              <span className="message__authoring">{projeto.author.name}</span>
              {" - 2024"}
          </div>
      </div>
  );
}

  
function ChannelNav({ activeChannel = null, channels = [] }) {
  return (
      <ul className="nav">
          {channels.map((channel) => (
              <li className="nav__item" key={channel.id}>
                  <a
                      className={`nav__link ${
                          activeChannel && activeChannel.id === channel.id ? "nav__link--active" : ""
                      }`}
                      href="#"
                  >
                      <ChannelLink {...channel} />
                  </a>
              </li>
          ))}
      </ul>
  );
}
  
function ConversationNav({ activeConversation = null, conversations = [] }) {
  return (
      <ul className="nav">
          {conversations.map((convo) => (
              <li className="nav__item" key={convo.id}>
                  <a
                      className={`nav__link ${
                          activeConversation && activeConversation.id === convo.id ? "nav__link--active" : ""
                      }`}
                      href="#"
                  >
                      <ConversationLink conversation={convo} />
                  </a>
              </li>
          ))}
      </ul>
  );
}
  
function ChannelLink({ name }) {
  return (
      <span className="channel-link">
          <span className="channel-link__icon">#</span>
          <span className="channel-link__element">{name}</span>
      </span>
  );
}
  
function ConversationLink({ conversation }) {
  return (
      <span className={`conversation-link ${conversation.isOnline ? "conversation-link--online" : ""}`}>
          <span className="conversation-link__icon" />
          <span className="conversation-link__element">{conversation.name}</span>
      </span>
  );
}
  
  function Badge({ children }) {
    return <span className="badge">{children}</span>;
  }
  
  function Button({
    children,
    type = "button",
    size = "default",
    variant = "default",
  }) {
    return (
      <button
        className={`button ${variant ? `button--${variant}` : ""} ${
          size ? `button--size-${size}` : ""
        }`}
        type={type}
      >
        <span className="button__content">{children}</span>
      </button>
    );
  }
  
  function Pad({ children }) {
    return (
      <div className="pad">
        <div className="pad__body">{children}</div>
      </div>
    );
  }
  
  function NavItem({ navItem }) {
    return (
        <li className="nav__item">
            <a className={`nav__link ${navItem.isActive ? "nav__link--active" : ""}`} href="#">
                <span className="nav__link__element">{navItem.text}</span>
            </a>
        </li>
    );
}
  
  function TextHeading3({ as: Component = "h3", children, className }) {
    return <Component className={`text-heading3 ${className || ""}`}>{children}</Component>;
  }
  
  function TextHeading4({ as: Component = "h4", children, className }) {
    return <Component className={`text-heading4 ${className || ""}`}>{children}</Component>;
  }
  
  function TextParagraph1({ as: Component = "p", children, className }) {
    return <Component className={`text-paragraph1 ${className || ""}`}>{children}</Component>;
  }
  
  function TextOverline({ as: Component = "span", children, className }) {
    return <Component className={`segment-topbar__overline ${className || ""}`}>{children}</Component>;
  }
  
  function IconFeedAdd({ className }) {
    return (
      <svg className={className} viewBox="0 0 24 24">
        <path d="M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z" />
      </svg>
    );
  }
  
  function IconSearchSubmit({ className }) {
    return (
      <svg className={className} viewBox="0 0 24 24">
        <path d="M21.172 24l-7.387-7.387c-1.388.874-3.024 1.387-4.785 1.387-4.971 0-9-4.029-9-9s4.029-9 9-9 9 4.029 9 9c0 1.761-.514 3.398-1.387 4.785l7.387 7.387-2.828 2.828zm-12.172-8c3.859 0 7-3.14 7-7s-3.141-7-7-7-7 3.14-7 7 3.141 7 7 7z" />
      </svg>
    );
  }
  
  function IconFeedMute({ className }) {
    return (
      <svg className={className} viewBox="0 0 24 24">
        <path d="M18 9.5c2.481 0 4.5 1.571 4.5 3.503 0 1.674-1.703 3.48-4.454 3.48-.899 0-1.454-.156-2.281-.357-.584.358-.679.445-1.339.686.127-.646.101-.924.081-1.56-.583-.697-1.007-1.241-1.007-2.249 0-1.932 2.019-3.503 4.5-3.503zm0-1.5c-3.169 0-6 2.113-6 5.003 0 1.025.37 2.032 1.023 2.812.027.916-.511 2.228-.997 3.184 1.302-.234 3.15-.754 3.989-1.268.709.173 1.388.252 2.03.252 3.542 0 5.954-2.418 5.954-4.98.001-2.906-2.85-5.003-5.999-5.003z" />
      </svg>
    );
  }
  
  function IconFeedSettings({ className }) {
    return (
      <svg className={className} viewBox="0 0 24 24">
        <path d="M6 16h-6v-3h6v3zm-2-5v-10h-2v10h2zm-2 7v5h2v-5h-2zm13-7h-6v-3h6v3zm-2-5v-5h-2v5h2zm-2 7v10h2v-10h-2zm13 3h-6v-3h6v3zm-2-5v-10h-2v10h2zm-2 7v5h2v-5h-2z" />
      </svg>
    );
  }
  
  function IconMenuMore({ className }) {
    return (
      <svg className={className} viewBox="0 0 24 24">
        <path d="M12 18c1.657 0 3 1.343 3 3s-1.343 3-3 3-3-1.343-3-3 1.343-3 3-3zm0-9c1.657 0 3 1.343 3 3s-1.343 3-3 3-3-1.343-3-3 1.343-3 3-3zm0-9c1.657 0 3 1.343 3 3s-1.343 3-3 3-3-1.343-3-3 1.343-3 3-3z" />
      </svg>
    );
  }
  
  const FIXTURES = {
    headerMenu: [
        { text: "Sobre" },
        { isActive: true, text: "Projetos" },
        { text: "Experiência" },
        { text: "Educação" },
        { text: "Artigos" },
    ],
    feed: [
        { id: "5ba5", name: "Sobre" },
        { id: "4f22", name: "Projetos" },
        { id: "fee9", name: "Experiência" },
        { id: "a0cc", name: "Educação" },
        { id: "dee3", name: "Artigos", isPrivate: true },
    ],
    conversation: [
        { id: "cc23", isOnline: true, name: "Artigo 1" },
        { id: "95b4", isOnline: true, name: "Artigo 2" },
        { id: "10cf", name: "Artigo 3" },
        { id: "e466", name: "Artigo 4" },
        { id: "ca0b", name: "Artigo 5" },
    ],
    projetos: [
      {
          id: "fd0cf1",
          content: "Projeto 1.",
          author: {
              id: "d12c1",
              name: "Felipe Cezar",
          },
      },
      {
          id: "fd0cf2",
          content: "Projeto 2.",
          author: {
              id: "d12c2",
              name: "Felipe Cezar",
          },
      },
  ],
};
  
  ReactDOM.render(<App />, document.getElementById("root"));
  
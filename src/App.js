import './App.css';
import { Layout, Header, Navigation, Drawer, Content, Footer, FooterSection, FooterDropDownSection, FooterLinkList } from 'react-mdl';
import Main from './components/Main';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="demo-big-content">
    <Layout className="layout">
        <Header className='header-color' title={<Link to="/" style={{textDecoration: 'none', color: 'white'}}>MyPortfolio</Link>} scroll>
            <Navigation>
                <a href="https://manju-resume.netlify.app">Resume</a>
                <Link to="/aboutme">About Me</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
            </Navigation>
        </Header>
        <Drawer title="Title">
            <Navigation>
                <a href="https://manju-resume.netlify.app">Resume</a>
                <Link to="/aboutme">About Me</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main />
        </Content>
        {/*<Footer size="mega" className='header-color'>
          <FooterSection type="middle">
            <FooterDropDownSection title="" className='footer-color'>
              <FooterLinkList>
                  <a href="/resume">Resume</a>
              </FooterLinkList>
            </FooterDropDownSection>
            <FooterDropDownSection title="" className='footer-color'>
              <FooterLinkList>
                  <a href="/aboutme">About Me</a>
              </FooterLinkList>
            </FooterDropDownSection>
            <FooterDropDownSection title="" className='footer-color'>
              <FooterLinkList>
                  <a href="/projects">Projects</a>
              </FooterLinkList>
            </FooterDropDownSection>
            <FooterDropDownSection title="" className='footer-color'>
              <FooterLinkList>
                  <a href="/contact">Contact</a>
              </FooterLinkList>
            </FooterDropDownSection>
                
          </FooterSection>
        </Footer>*/}
    </Layout>
</div>
  );
}

export default App;

import React from 'react';
import { TextField, Button, Link as MUILink } from '@mui/material';
import LogoImage from './../../assets/img//Authentication2_Logo.png';
import { styled } from '@mui/material/styles';
import PicImageImage from './../../assets/img//Authentication2_pic.png';
import useAuthentication2 from './useAuthentication2';


const ScreenDesktop = styled('div', {
  shouldForwardProp: (prop) => !['data'].includes(prop.toString()),
})(({ theme, data }) => ({
  backgroundColor: `rgba(255, 255, 255, 1)`,
  borderRadius: `0px`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  width: '100%',
  height: data.currentVariant === 'ScreenScreen2' ? `676.23px` : `866px`,
  justifyContent:
    data.currentVariant === 'ScreenScreen2' ? `center` : `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  overflow: `hidden`,
}));

const LeftSide = styled('div', {
  shouldForwardProp: (prop) => !['data'].includes(prop.toString()),
})(({ data }) => ({
  borderRadius: `0px`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `center`,
  alignItems: `flex-start`,
  padding: data.currentVariant === 'ScreenScreen2' ? `100px 30px` : `0px`,
  boxSizing: `border-box`,
  alignSelf: data.currentVariant === 'ScreenScreen2' ? 'unset' : `stretch`,
  width: data.currentVariant === 'ScreenScreen2' ? 'unset' : `700px`,
  margin: `0px`,
  flex: data.currentVariant === 'ScreenScreen2' ? `1` : 'unset',
}));

const LogIn = styled('div', {
  shouldForwardProp: (prop) => !['data'].includes(prop.toString()),
})(({ data }) => ({
  borderRadius: `0px`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `center`,
  alignItems: `center`,
  padding: `0px`,
  boxSizing: `border-box`,
  alignSelf: `stretch`,
  margin: `0px`,
  overflow: `hidden`,
  flex: data.currentVariant === 'ScreenScreen2' ? `1` : 'unset',
}));

const Top = styled('div', {
  shouldForwardProp: (prop) => !['data'].includes(prop.toString()),
})(({ data }) => ({
  borderRadius: `0px`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `center`,
  padding: `0px`,
  boxSizing: `border-box`,
  margin: `0px`,
  alignSelf: data.currentVariant === 'ScreenScreen2' ? `stretch` : 'unset',
}));

const Logo = styled('img')({
  height: `62.23px`,
  width: `48.38px`,
  objectFit: `contain`,
  margin: `0px`,
});

const Lockup = styled('div')({
  borderRadius: `0px`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `center`,
  padding: `0px`,
  boxSizing: `border-box`,
  margin: `30px 0px 0px 0px`,
});

const LogInToYourAccount = styled('div', {
  shouldForwardProp: (prop) => !['data'].includes(prop.toString()),
})(({ theme, data }) => ({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  margin: `0px`,
}));

const Signup = styled('div')({
  borderRadius: `0px`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `10px`,
  boxSizing: `border-box`,
  margin: `12px 0px 0px 0px`,
});

const DonTHaveAnAccount = styled('div')(({ theme }) => ({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  margin: `0px`,
}));

const Link1 = styled(MUILink)(({ theme }) => ({
  margin: `0px 0px 0px 7px`,
}));

const Input1 = styled('div')({
  borderRadius: `0px`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  alignSelf: `stretch`,
  margin: `40px 0px 0px 0px`,
});

const TextFieldStandard = styled(TextField, {
  shouldForwardProp: (prop) => !['data'].includes(prop.toString()),
})(({ theme, data }) => ({
  alignSelf: `stretch`,
  margin: `0px`,
  fontStyle: `normal`,
  fontFamily: `Roboto`,
  fontWeight: `400`,
  fontSize: `12px`,
  letterSpacing: `0.15000000596046448px`,
  textDecoration: `none`,
  lineHeight: `12px`,
  textTransform: `none`,
}));

const TextFieldStandard1 = styled(TextField, {
  shouldForwardProp: (prop) => !['data'].includes(prop.toString()),
})(({ theme, data }) => ({
  alignSelf: `stretch`,
  margin: `30px 0px 0px 0px`,
  fontStyle: `normal`,
  fontFamily: `Roboto`,
  fontWeight: `400`,
  fontSize: `12px`,
  letterSpacing: `0.15000000596046448px`,
  textDecoration: `none`,
  lineHeight: `12px`,
  textTransform: `none`,
}));

const Btm = styled('div')({
  borderRadius: `0px`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `center`,
  padding: `0px`,
  boxSizing: `border-box`,
  alignSelf: `stretch`,
  margin: `40px 0px 0px 0px`,
});

const ButtonContained = styled(Button, {
  shouldForwardProp: (prop) => !['data'].includes(prop.toString()),
})(({ theme, data }) => ({
  alignSelf: `stretch`,
  margin: `0px`,
  fontStyle: `normal`,
  fontFamily: `Roboto`,
  fontWeight: `500`,
  fontSize: `15px`,
  letterSpacing: `0.46000000834465027px`,
  textDecoration: `none`,
  lineHeight: `26px`,
  textTransform: `uppercase`,
}));

const Link2 = styled(MUILink)(({ theme }) => ({
  margin: `24px 0px 0px 0px`,
}));

const Pic = styled('div')({
  backgroundImage: `url(${PicImageImage})`,
  backgroundPosition: `center`,
  backgroundSize: `cover`,
  backgroundRepeat: `no-repeat`,
  borderRadius: `0px`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  alignSelf: `stretch`,
  flex: `1`,
  margin: `0px`,
  overflow: `hidden`,
});

function Authentication2(props) {
  const { data } = useAuthentication2();

  return (
    <ScreenDesktop className={props.className} data={data}>
      <LeftSide data={data}>
        <LogIn data={data}>
          <Top data={data}>
            <Logo src={LogoImage} loading="lazy" alt={'Logo'} />
            <Lockup>
              <LogInToYourAccount data={data}>
                {`Log In to your Account`}
              </LogInToYourAccount>
              <Signup>
                <DonTHaveAnAccount>
                  {`Don’t have an account? `}
                </DonTHaveAnAccount>
                <Link1 href="#" underline="always">
                  Sign Up
                </Link1>
              </Signup>
            </Lockup>
          </Top>
          <Input1>
            <TextFieldStandard
              variant="standard"
              disabled={false}
              size={'medium'}
              label={'User Name'}
              data={data}
            />
            <TextFieldStandard1
              variant="standard"
              disabled={false}
              size={'medium'}
              label={'Password'}
              data={data}
            />
          </Input1>
          <Btm>
            <ButtonContained
              variant="contained"
              disabled={false}
              size={'large'}
              color={'primary'}
              data={data}
            >
              {'LOG IN'}
            </ButtonContained>
            <Link2 href="#" underline="always">
              Forgot Password
            </Link2>
          </Btm>
        </LogIn>
      </LeftSide>
      {!(data.currentVariant === 'ScreenScreen2') && <Pic></Pic>}
    </ScreenDesktop>
  );
}

export default Authentication2;

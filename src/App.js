import React, { useEffect, useState } from 'react';
import './style.css';
import { useStyles } from './AppConfig';
import TableInfo from './Components/UIs/tableInfo/TableInfo';
import Grid from '@material-ui/core/Grid';
import liff from '@line/liff';
import Avatar from '@material-ui/core/Avatar';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';

export default function App() {
  const classes = useStyles();
  const [userInfo, setUserInfo] = useState([]);
  const [pics, setPics] = useState('');

  useEffect(() => {
    const getInfo = val => {
      return [
        { topic: 'User Name', detail: val.name },
        { topic: 'Email', detail: val.email },
        {
          topic: 'Pics Location',
          detail: val.picture.substring(0, 24) + '...',
          picUrl: val.picture
        }
      ];
    };
    async function startLineLiff() {
      if (liff.isLoggedIn()) {
        const token = await liff.getAccessToken();
        // const sharePicker = await liff.isApiAvailable('shareTargetPicker');
        // const idToken = await liff.getIDToken();
        const decodedIdToken = await liff.getDecodedIDToken();
        const info = getInfo(decodedIdToken);
        setPics(info[2].picUrl);
        setUserInfo(info);
      }
    }

    liff.ready.then(() => {
      if (!liff.isLoggedIn()) {
        liff.login({
          redirectUri: 'https://lineliff-demo.web.app'
        });
      }
    });

    //initialize the line liff
    liff
      .init({
        liffId: '1656045005-lZ6nRWqE'
      })
      .then(() => {
        startLineLiff();
      })
      .catch(err => console.log(err));
  }, []);

  const handleShare = () => {
    if (liff.isApiAvailable('shareTargetPicker')) {
      liff
        .shareTargetPicker([
          {
            type: 'text',
            text: 'https://lineliff-demo.web.app'
          }
        ])
        .then(() => {
          liff.closeWindow();
        });
    }
  };
  return (
    <Container>
      <h1 style={{ textAlign: 'center' }}>My Profile</h1>
      <div className={`${classes.root}`}>
        <Avatar src={pics} className={classes.large} />
      </div>
      <Grid container spacing={2}>
        <Grid item xs={12} md={12}>
          <TableInfo rows={userInfo} />
        </Grid>
      </Grid>
      <div className={classes.btnLiff}>
        <Button color="primary" variant="outlined" onClick={handleShare}>
          Share LIFF
        </Button>
      </div>
    </Container>
  );
}

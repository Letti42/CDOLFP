import fetch from "cross-fetch"
const projects = [];
const ids = [`VhGNlw8KwnvMEm1cISPV7w-aJ6Yc6XtyhvTv4WFSNMw`, `MQ4Ln5Sq41OkK_Up_ubo97c1nxFCx1USbIxqvGHyixM`, `6P2snCSXWkjFqMsE6qOynkMH5es2oEy8L6uXqCYtcC8`, `54j7mD6Gdq_17Fcia6ouIweuialttb3xUjK4pwcp-4c`, `Mp6ZS3h45ZdJIkPLYD3fx0VrlxpJuVDKuWDupMMv2RY`, `wJ3E55ftc7i_duhOp31uSZinQICeHx21CtWq6PVJvi8`, `TDDH_CHLG1sYHI-Ih_LrGQ837zU-PL3uhuR9CAtT4W4`, `vJRBRj0Yk_JffKkKpco-9i76NRFuv-10hXPaUtmfaFc`, `a3MyP9h24BjgeCGwrpoL2sC9TcIoA-J-fIITBOnuWIY`, `iZjuDMMMXnhhbFmGVxdng5p0VQg6HzWZMw3MuhOURl8`, `u4_bi8oMA13seaHIfpDd-d5lSdY5uTieMCPj61CP4fI`, `UtLZVcZnm63ZMOD8ptr3vHWOcEgY-Q6rF-Mei_18qVk`, `5395oJsn6I1FuXArGI_nVslx55b9JClHO8iA8bVomn8`, `0IlNcGueKV8EP6cQbVoUAhOKIWLAS_oqHp6S4niGYFA`, `KU324flf8ldPBoj7naLwRwu7Ic6eNXi9tKI2CAxID7g`, `MEj7I3C5SBHIbNsnDrqmpU2HIH3gRWdlzMEkEhb_Pu8`, `59euJLwAANk66a99-w2VHZSBeuo7pBSDe66HkWVM68o`, `UVgyRh9fl6pwjGV9ddv9v03bYjdzgViuprP4M22KeeY`, `Q3laBaq47f43JOBLZ8qzHlnfYk1eXvBZnaJ0TX5WS2Q`, `agOxyboI0lhvRgi0RQAgcFpUeAU-YyDVW23WcFiIC7Q`, `cPWV-7dGu5ljo_J6X6v0fFCCsQEHdTI8-oU1tha0ORA`, `P_exOkM4kAtJ7giCa2wA2uq4rLoNk75TaXhOY7KQvNY`]
const API = "https://fetch-proxy.jacobbutler6.repl.co/json?url=https://studio.code.org/v3/channels/"
    // Loop through the projects array and create table rows with thumbnails
    let project = null;
    (function orderedFetch(index) {
      let source = API + ids[index];
      fetch(source)
      .then(response => {
        if(response.status < 206) {
          return(response.json())
        } 
      })
      .then(data => {
        console.log(data);
        //orderedFetch(index++)
      })
      .catch(err => {
        console.log(err);
      })
      .finally(() => {
        if(index < ids.length-1) {
          orderedFetch(++index)
        }
      })
    })(0)

namespace typeGuardFail {
  type MsgV1 = {
    version: 1;
    data: string;
  };

  type MsgV2 = {
    version: 2;
    data: object;
  };

  type Msg = MsgV1 | MsgV2;

  // --- 1.....
  function failOnDestruction(msg: Msg) {
    const { version, data } = msg;

    if (version === 1) {
      console.log(data.length); // Error
    }
  }

  // --- 2.....
  function failInObj(version: 1 | 2) {
    const msg: Msg = {
      // Error
      version,
      data: version === 1 ? "version1" : {},
    };

    console.log(msg);
  }

  // --- 3.....
  function failOnIndex(msgs: Msg[]) {
    for (let i = 0; i < msgs.length; i++) {
      if (msgs[i].version === 1) {
        console.log(msgs[i].data.length); // Error
      }

      // const msg = payloads[i]
      // if (msg.version === 1) {
      //   console.log(msg.data.length)
      // }
    }
  }
}

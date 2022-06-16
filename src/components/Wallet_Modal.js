import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import CopyrightIcon from "@material-ui/icons/FileCopy";
import CloseIcon from "@material-ui/icons/Close";
import { toast } from 'react-toastify';
// import Slide from '@material-ui/core/Slide';

// const Transition = React.forwardRef(function Transition(props, ref) {
//   return <Slide direction="down" ref={ref} {...props} />;
// });

function Wallet_Modal(props) {
  useEffect(() => {
  }, [props.isShowWalletInfo, props.wallet]);

  const onCopyClipboard = () => {
    navigator.clipboard.writeText(props.wallet.address);
    toast.configure();
    toast.success("The address was copied to your clipboard", {
      position: "bottom-center",
      pauseOnHover: true,
      draggable: false,
      progress: undefined,
    });
  }

  return (
    <Dialog
      open={props.isShowWalletInfo}
      // TransitionComponent={Transition}
      keepMounted
      onClose={() => props.onHandleWalletInfo(false)}
      aria-describedby="alert-dialog-slide-description"
      className="wallet_info_dlg"
    >
      <DialogContent>
        <div className='balance_container'>
          <label className='title'>Balance</label>
          <div className='balance_info'>
            <div className='balance_item'>
              <div>KSM</div>
              <div>{parseFloat(props.wallet.balance).toFixed(2)}</div>
            </div>
            <div className='balance_item'>
              <div>KSM</div>
              <div>{parseFloat(props.wallet.balance).toFixed(2)}</div>
            </div>
          </div>
        </div>

        <div className='balance_container'>
          <label className='title'>Whitelist Status</label>
          <div className='balance_info'>
            <div className='balance_item'>
              <div>No Whitelist</div>
            </div>
          </div>
        </div>

        <div className='balance_row_item' onClick={() => onCopyClipboard()}>
          <div>Copy Address</div>
          <CopyrightIcon/>
        </div>

        {/* <div className='balance_row_item watcher'>
        <a target="_blank" rel="noopener noreferrer" href="https://blockscout.moonriver.moonbeam.network/address/0x3261c30AFED2Cd4Ff1B5e506B508A451Fa261BaD/transactions">View on MoonRiver</a>
          <CopyrightIcon/>
        </div> */}

        <div className='balance_row_item' onClick={() => props.onDisconnectWallet()}>
          <div>Disconnect</div>
          <CloseIcon/>
        </div>
      </DialogContent>
    </Dialog>
  )
}

const mapStateToProps = state => {
  return {
    wallet: state.getWalletInfo
  };
};

export default connect(mapStateToProps)(Wallet_Modal);
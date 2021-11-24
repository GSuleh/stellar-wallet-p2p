import { Component, State } from "@stencil/core";
import { Prompter } from "../prompt/stellar-prompt";

import componentWillLoad from "./events/componentWillLoad";
import render from "./events/render";

import createAccount from "./methods/createAccount";
import copyAddress from "./methods/copyAddress";
import copySecret from "./methods/copySecret";
import signOut from "./methods/signOut";
import setPrompt from "./methods/setPrompt";

interface StellarAccount {
  publicKey: string;
  keystore: string;
}

@Component({
  tag: 'stellar-wallet-p2p',
  styleUrl: 'stellar-wallet-p2p.scss',
  shadow: true,
})
export class Wallet {
  @State() account: StellarAccount;
  @State() prompter: Prompter = { show: false };
  @State() error: any = null;

  // Component events
  componentWillLoad() {}
  render() {}

  // Stellar methods
  createAccount = createAccount;
  copyAddress = copyAddress;
  copySecret = copySecret;
  signOut = signOut;

  // Misc methods
  setPrompt = setPrompt;
}

Wallet.prototype.componentWillLoad = componentWillLoad;
Wallet.prototype.render = render;
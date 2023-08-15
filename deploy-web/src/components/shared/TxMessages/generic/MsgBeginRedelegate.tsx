import { TransactionMessage } from "@src/types";
import { coinsToAmount } from "@src/utils/mathHelpers";
import { AddressLink } from "../../AddressLink";
import { AKTAmount } from "../../AKTAmount";
import { LabelValue } from "../../LabelValue";

type TxMessageProps = {
  message: TransactionMessage;
};

export const MsgBeginRedelegate: React.FunctionComponent<TxMessageProps> = ({ message }) => {
  // ###################
  // TODO Missing Auto claim reward
  // ###################
  return (
    <>
      <LabelValue label="Delegator Address" value={<AddressLink address={message?.data?.delegatorAddress} />} />
      <LabelValue label="Source Validator Address" value={<AddressLink address={message?.data?.validatorSrcAddress} />} />
      <LabelValue label="Destination Validator Address" value={<AddressLink address={message?.data?.validatorDstAddress} />} />
      <LabelValue label="Amount" value={<AKTAmount uakt={coinsToAmount(message?.data?.amount, "uakt")} showAKTLabel showUSD />} />
    </>
  );
};

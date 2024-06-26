import { useState } from "react";
import styled from "styled-components";
import { Address, toNano } from "ton";
import { useTonConnect } from "../hooks/useTonConnect";
import { Card, FlexBoxCol, FlexBoxRow, Button, Input } from "./styled/styled";
import { CHAIN } from "@tonconnect/protocol";
import { time } from "console";

export function TransferTon() {
  const { sender, connected, network } = useTonConnect();
  const [tonAmount, setTonAmount] = useState("5");
  const [tonRecipient, setTonRecipient] = useState("EQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAM9c");
  const [expirationDate, setExpirationDate] = useState(Date.now());

  return (
    <Card>
      <FlexBoxCol>
        <h3>Fill Contract Form</h3>
        <FlexBoxRow>
          <label style={{ width: '100px', display: 'inline-block' }}>Contract</label>
          <Input
            style={{ marginRight: 8, fontSize: '14px' }}
            value= {network ? network === CHAIN.TESTNET ? "!mainnet" : "retention.ton" : "N/A" }
            disabled
          ></Input>
        </FlexBoxRow>
        <FlexBoxRow>
        <label style={{ width: '100px', display: 'inline-block' }}>Amount</label>
          <Input
            style={{ marginRight: 8 }}
            type="number"
            value={tonAmount}
            onChange={(e) => setTonAmount(e.target.value)}
            min={5}
          ></Input>
        </FlexBoxRow>
        <FlexBoxRow>
          <label style={{ width: '100px', display: 'inline-block' }}>Secret</label>
          <Input
            style={{ marginRight: 8 }}
            value={tonRecipient}
            onChange={(e) => setTonRecipient(e.target.value)}
          ></Input>
        </FlexBoxRow>
        <FlexBoxRow>
          <label style={{ width: '100px', display: 'inline-block' }}>Expiration</label>
          <Input
            style={{ marginRight: 8 }}
            type="number"
            value={expirationDate}
            // onChange={(e) => setExpirationDate(e.target.value)}
          ></Input>
        </FlexBoxRow>
        <div style={{ 
          display: 'grid', 
          placeItems: 'center', 
          height: '15vh' 
        }}>
          <Button
            disabled={!connected}
            style={{ 
              marginTop: 18, 
              width: '200px',       
              height: '50px',       
              color: 'white'        
            }}
            
            onClick={async () => {
              sender.send({
                to: Address.parse(tonRecipient),
                value: toNano(tonAmount),
              });
            }}>
              Create
          </Button>
        </div>
      </FlexBoxCol>
    </Card>
  );
}

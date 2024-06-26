import { useState } from "react";
import styled from "styled-components";
import { Address, toNano } from "ton";
import { useTonConnect } from "../hooks/useTonConnect";
import { Card, FlexBoxCol, FlexBoxRow, Button, Input } from "./styled/styled";
import { CHAIN } from "@tonconnect/protocol";
import { time } from "console";

export function RequestRefund() {
  const { sender, connected, network } = useTonConnect();
  const [tonAmount, setTonAmount] = useState("5");
  const [tonRecipient, setTonRecipient] = useState("EQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAM9c");
  
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const handleDateChange = (value: string) => {
    const timestamp = Number(value);
    if (!isNaN(timestamp)) {
      const date = new Date(timestamp);
      setSelectedDate(date);
    } else {
      console.error('Invalid timestamp');
    }
  };

  return (
    <Card>
      <FlexBoxCol>
        <h3>Fill Refund Form</h3>
        
        
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
            type="text"
            value={selectedDate || Date.now()}
            onChange={(e) => handleDateChange( e.target.value) }
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
              Request
          </Button>
        </div>
      </FlexBoxCol>
    </Card>
  );
}

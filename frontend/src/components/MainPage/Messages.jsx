import { useSelector } from "react-redux";
import { Col, Form, Button } from 'react-bootstrap';

const Messages = () => {
  const activeChannel = useSelector(({ channels: { channels, currentChannelId } }) => {
    const activeChannel = channels.find((channel) => channel.id === currentChannelId);
    
    return activeChannel;
  });

  return (
    <Col className="p-0 h-100">
      <div className="d-flex flex-column h-100">
        <div className="bg-light mb-4 p-3 shadow-sm small">
          <p className="m-0"><b># {activeChannel ? activeChannel.name : 'general'}</b></p>
          <span className="text-muted">0 сообщений</span>
        </div>
        <div id="messages-box" className="chat-messages overflow-auto px-5" />
        <div className="mt-auto px-5 py-3">
          <Form novalidate="" className="py-1 border rounded-2">
            <Form.Group className="has-validation input-group">
              <Form.Control name="body" aria-label="Новое сообщение" placeholder="Введите сообщение..." className="border-0 p-0 ps-2" value="" />
              <Button variant="group-vertical">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="20" height="20" fill="currentColor">
                  <path fill-rule="evenodd" d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm4.5 5.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
                </svg>
                <span className="visually-hidden">Отправить</span>
              </Button>
            </Form.Group>
          </Form>
        </div>
      </div>
    </Col>
  );
};

export default Messages;
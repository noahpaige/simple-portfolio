function on(eventType: string, listener: (event: Event) => void) {
  document.addEventListener(eventType, listener);
}

function off(eventType: string, listener: (event: Event) => void) {
  document.removeEventListener(eventType, listener);
}

function once(eventType: string, listener: (event: Event) => void) {
  on(eventType, handleEventOnce);

  function handleEventOnce(event: Event) {
    listener(event);
    off(eventType, handleEventOnce);
  }
}

function trigger(eventType: string, data: any) {
  const event = new CustomEvent(eventType, { detail: data });
  document.dispatchEvent(event);
}

const MyEvents = {
  NavSelect: "NavSelect",
};

export { on, once, off, trigger, MyEvents };

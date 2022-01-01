import { Component } from "../interfaces/component";

export default class BaseComponent implements Component{
  private template:HTMLElement;
  
  constructor(private readonly templateStr:string){
    const template = document.createElement('template');
    template.innerHTML = templateStr.trim();
    this.template = template.content.firstElementChild! as HTMLElement;
  }

  render(parent: HTMLElement) {
    parent.insertAdjacentElement("beforeend", this.template! as HTMLElement)
  }

  attach(...components:Component[]){
    components.forEach(c => c.render(this.template))
  }

  setEventHandler<Type extends keyof HTMLElementEventMap>(selector:string, type:Type, handler:(ev:HTMLElementEventMap[Type])=>void){
    (this.template.querySelector(selector) as HTMLElement)?.addEventListener(type, handler);
  };
  
  setEventHandlers<Type extends keyof HTMLElementEventMap>(selector:string, type:Type, handler:(ev:HTMLElementEventMap[Type])=>void){
    this.template.querySelectorAll(selector)?.forEach(element => {
      (element as HTMLElement)?.addEventListener(type, handler);
    })
  };
}


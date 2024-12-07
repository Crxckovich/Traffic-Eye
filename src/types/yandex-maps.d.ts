declare namespace ymaps {
  function ready(callback: () => void): void;

  class Map {
    constructor(element: HTMLElement | null, options: MapOptions);
    setCenter(center: [number, number], zoom: number): void;
    getCenter(): [number, number];
    getZoom(): number;
    controls: MapControls;
    geoObjects: GeoObjectCollection;
    destroy(): void;
    events: IEventManager;
    balloon: IBalloonManager;
  }

  interface MapOptions {
    center: [number, number];
    zoom: number;
    controls?: string[];
  }

  interface MapControls {
    add(control: string): void;
    remove(control: string): void;
    get(control: string): IControl;
  }

  interface IControl {
    showTraffic?: () => void;
    hideTraffic?: () => void;
  }

  class Placemark implements IGeoObject {
    constructor(geometry: [number, number] | object, properties?: PlacemarkProperties, options?: PlacemarkOptions);
    geometry: IGeometry;
    properties: IDataManager;
    events: IEventtypescript
    Manager;
    options: IOptionManager;
    balloon: IBalloonManager;
    state: IDataManager;
  }

  interface PlacemarkProperties {
    balloonContent?: string;
  }

  interface PlacemarkOptions {
    preset?: string;
  }

  interface GeoObjectCollection extends ICollection, IGeoObject {
    add(child: IGeoObject): this;
    remove(child: IGeoObject): this;
    getIterator(): IIterator;
    get(index: number): IGeoObject;
  }

  interface ICollection {
    add(object: object): this;
    remove(object: object): this;
    get(index: number): object;
    getLength(): number;
    each(callback: (object: object) => void, context?: object): void;
  }

  interface IGeoObject extends IEventEmitter {
    geometry: IGeometry | null;
    properties: IDataManager;
    state: IDataManager;
    events: IEventManager;
    options: IOptionManager;
  }

  interface IGeometry extends IBaseGeometry, IEventEmitter {
    getType(): string;
    getCoordinates(): [number, number] | [number, number][] | [number, number][][];
    setCoordinates(coordinates: [number, number] | [number, number][] | [number, number][][]): void;
  }

  interface IEventManager extends IEventTrigger {
    add(types: string | string[], callback: Function, context?: object, priority?: number): this;
    remove(types: string | string[], callback: Function, context?: object, priority?: number): this;
  }

  interface IBalloonManager extends IEventManager {
    open(position: [number, number], data: object | string | HTMLElement, options?: object): Promise<IBalloon>;
    close(force?: boolean): Promise<IBalloonManager>;
  }

  interface IBalloon extends IEventEmitter {
    close(): Promise<IBalloon>;
  }

  function geocode(request: string | [number, number], options?: GeocoderOptions): Promise<IGeoObjectCollection>;

  interface GeocoderOptions {
    results?: number;
  }

  interface IGeoObjectCollection extends ICollection, IGeoObject {
    getIterator(): IIterator;
    get(index: number): IGeoObject;
    toArray(): IGeoObject[];
  }

  interface IIterator {
    getNext(): object | null;
  }

  function suggest(request: string, options?: SuggestOptions): Promise<ISuggestItem[]>;

  interface SuggestOptions {
    provider?: string | ISuggestProvider;
    results?: number;
    boundedBy?: [number, number][];
    strictBounds?: boolean;
  }

  interface ISuggestItem {
    value: string;
    displayName: string;
    hl: [number, number][];
    type: string;
  }

  namespace traffic {
    namespace provider {
      class Actual {
        constructor(options?: ActualProviderOptions);
        getTrafficForPosition(position: [number, number], zoom: number): Promise<TrafficData>;
      }
    }
  }

  interface ActualProviderOptions {
    autoUpdate?: boolean;
    updateInterval?: number;
  }

  interface TrafficData {
    timestamp: number;
    timeZone: string;
    streets: TrafficStreet[];
  }

  interface TrafficStreet {
    id: string;
    name: string;
    load: number;
    length: number;
    level: number;
    speed: number;
  }

  interface IEventEmitter {
    events: IEventManager;
  }

  interface IEventTrigger {
    fire(type: string, eventobject?: object | IEvent): this;
  }

  interface IEvent {
    allowMapEvent(): void;
    callMethod(name: string): void;
    get(name: string): any;
    getSourceEvent(): IEvent | null;
    isDefaultPrevented(): boolean;
    isImmediatePropagationStopped(): boolean;
    isMapEventAllowed(): boolean;
    isPropagationStopped(): boolean;
    preventDefault(): boolean;
    stopImmediatePropagation(): boolean;
    stopPropagation(): boolean;
  }

  interface IBaseGeometry extends IEventEmitter {
    getBounds(): number[][] | null;
    getType(): string;
  }

  interface IDataManager extends IEventEmitter {
    get(path: string, defaultValue?: any): any;
    getAll(): object;
    set(path: object | string, value?: any): this;
    unset(path: string): this;
    setAll(properties: object): this;
  }

  interface IOptionManager extends IDataManager {
    resolve(key: string, name?: string): any;
  }
}

declare global {
  interface Window {
    ymaps: typeof ymaps;
  }
}

export = ymaps;
export as namespace ymaps;
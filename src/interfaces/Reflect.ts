declare namespace Reflect {
    function get(target: object, propertyKey: string | symbol);
    function defineMetadata(metadataKey: any, metadataValue: any, target: Object): void;
    function getMetadata(metadataKey: any, target: Object): any;
}
//custom한 webpack 사용하므로 react-app-env.d.ts가 아니라,
//직접 @types/Global.d.ts로 타입 설정해줘야 함

interface Window {
  ethereum: any;
}

declare module "*.jpg";
declare module "*.png";
declare module "*.jpeg";
declare module "*.gif";
declare module "*.gltf";
declare module "*.mp4";


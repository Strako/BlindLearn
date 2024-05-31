# Instrucciones para instalar Brew y Node, y ejecutar un proyecto React 
## Instalación de Homebrew 
Para instalar Homebrew en macOS, abre una terminal y ejecuta el siguiente comando:

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

## Instalación de Node.js 
Una vez instalado Homebrew, puedes instalar Node.js versión 20 con el siguiente comando en la terminal:

```bash
brew install node@20
```

Para verificar la versión instalada de Node.js, ejecuta:

```bash
node -v
```

## Descargar el proyecto desde GitHub 
Para descargar el proyecto desde GitHub, sigue estos pasos: 
1. Abre tu navegador web y dirígete a la siguiente URL: [https://github.com/Strako/BlindLearn](https://github.com/Strako/BlindLearn).
2. Haz clic en el botón "Code" y luego en "Download ZIP".
## Descomprimir y acceder a la carpeta del proyecto 
1. Una vez descargado el archivo ZIP, descomprímelo. 
2. Accede a la carpeta `BlindLearn-main/BlindLearn`. 
## Instalación de dependencias y ejecución del proyecto React 
1. Abre una terminal y navega hasta la raíz del proyecto (la carpeta `BlindLearn-main/BlindLearn`). 
2. Instala las dependencias del proyecto ejecutando:
```bash
npm install
```

3. Finalmente, para ejecutar el proyecto de React, utiliza el siguiente comando:
```bash
npm run dev
```

Esto iniciará el servidor de desarrollo y podrás ver el proyecto en tu navegador.

# figma-view
React figma renderer component

```
yarn add figma-view
```

## Backends
**html-backend**

draws figma document using standard html elements

**canvas-backend**

draws figma document on html5 canvas

**iframe-backend**

A simlpe figma embeding wrapper


## Usage


Basic usage
```tsx
import React from "react"
import FigmaView from "figma-view"

// with url
export default funtion (){
  return <FigmaView url="https://figma.com/files/xxx?node-id=xxx" fallback={<>Loading..</>} cached/>
}

// with data json
export default funtion (){
  return <FigmaView data={frameNode} fallback={<>Loading..</>} fromapi/>
}
```

Data from plugin api
```tsx
<FigmaView data={frameNode} fallback={<>Loading..</>} fromplugin/>
```

Data from rest api
```tsx
<FigmaView data={frameNode} fallback={<>Loading..</>} fromapi/>
// or.. by default the from api is set to true.
<FigmaView data={frameNode} fallback={<>Loading..</>}/>
```


Using Nodes
```tsx
import { Frame, Text, Autolayout } from "figma-view"

export function FigmaDesignMock(){
  return (
    <Frame>
      <Autolayout>
        <Text>
          This is a view made with figma-view
        </Text>
      </Autolayout>
    </Frame>
  )
}
```


## Authentication
```tsx
import FigmaView, { FigmaAuthenticationProvider } from "figma-view"

const _figma_personal_access_token = process.env.FIGMA_PERSONAL_ACCESSTOKEN;

export default function (){
  return (
    <FigmaAuthenticationProvider personalAccessToken={_figma_personal_access_token}>
      <FigmaView url="https://figma.com/files/xxxx?node-id=xxx"/>
    </FigmaAuthenticationProvider>
  );
}

// or with access token (not personal access token)
// issue of access token is not done by this package. you can use `@design-sdk/figma-oauth` for that.

export default function (){
  return (
    <FigmaAuthenticationProvider accessToken={accesstoken}>
      <FigmaView url="https://figma.com/files/xxxx?node-id=xxx"/>
    </FigmaAuthenticationProvider>
  );
}

```


### References
- [design-sdk](https://github.com/gridaco/design-sdk)

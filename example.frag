precision mediump float;

varying vec2 pos;

uniform float millis;

void main(){
  
  vec2 newPos = fract(pos*10.0);
  vec4 color1 = vec4(1.0, 0.5, 0.4, 1.0);
  vec4 color2 = vec4(0.4, 0.2, 1.0, 1.0);
  vec4 colorx = mix(color1, color2, newPos.x);
  vec4 colory = mix(color1, color2, newPos.y);
  float slope = (sin(millis/500.0)+1.0)/2.0;
  vec4 color = mix(colorx, colory, slope);
  gl_FragColor = color;
}
// Fragment shader.
#version 120

uniform vec4 uniColor;
uniform struct {
   vec4 ambientColor;
   vec4 diffuseColor;
   vec4 specularColor;
} uniLightColor;
uniform sampler2D diffuse;

void main() {
    gl_FragColor = vec4(0, 1, 0, 1);
}

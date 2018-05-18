// Fragment shader.
#version 120

uniform vec4 cut_plane_distance;
uniform vec4 cut_plane_width1;
uniform vec4 cut_plane_width2;
uniform vec3 distance_color;
uniform vec3 width_color_1;
uniform vec3 width_color_2;
uniform float focal_width;

void main() {
    gl_FragColor = vec4(0, 1, 0, 1);
}

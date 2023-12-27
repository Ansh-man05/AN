import { useThree } from '@react-three/fiber';
import { Vector3, BufferGeometry, Float32BufferAttribute, Points, PointsMaterial } from 'three';

const ClickableDots = () => {
  const { scene } = useThree();

  // Define the positions and URLs of the clickable dots
  const clickableDots = [
    { position: new Vector3(0, 0, 0), url: 'https://your-url-1.com' },
    { position: new Vector3(1, 1, 0), url: 'https://your-url-2.com' },
    // Add more clickable dots as needed
  ];

  // Create BufferGeometry and PointsMaterial for the clickable dots
  const dotGeometry = new BufferGeometry();
  const dotMaterial = new PointsMaterial({ color: 0x000000 }); // Adjust color as needed

  // Array to hold vertices for the dots
  const vertices = [];
  const urls = [];

  // Add vertices and URLs for each clickable dot
  clickableDots.forEach((dot) => {
    vertices.push(dot.position.x, dot.position.y, dot.position.z);
    urls.push(dot.url);
  });

  // Set dot positions and create points
  dotGeometry.setAttribute('position', new Float32BufferAttribute(vertices, 3));
  const dotPoints = new Points(dotGeometry, dotMaterial);

  // Set dotPoints' positions in the scene
  scene.add(dotPoints);

  return null; // Return null because the dots are added directly to the scene
};

export default ClickableDots;

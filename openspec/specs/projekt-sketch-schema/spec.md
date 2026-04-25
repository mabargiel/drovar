## ADDED Requirements

### Requirement: ProjektSketch Sanity document type exists
The Sanity schema SHALL include a `projektSketch` document type enabling editors to create and manage design sketch entries without code changes.

#### Scenario: Document creation in studio
- **WHEN** an editor opens Sanity Studio
- **THEN** "Projekt (Szkic)" appears as a document type and a new document can be created

### Requirement: Category field with fixed enum values
Each `projektSketch` document SHALL have a required `category` field restricted to the values: `modulowe`, `kasowe`, `bary`.

#### Scenario: Valid category selection
- **WHEN** an editor creates a new projektSketch document
- **THEN** the category field presents exactly three options: Meble modułowe, Meble kasowe, Bary

#### Scenario: Category is required
- **WHEN** an editor attempts to publish a projektSketch without selecting a category
- **THEN** Sanity Studio blocks publication with a validation error

### Requirement: Image field with hotspot support
Each `projektSketch` document SHALL have a required `image` field of type `image` with hotspot and crop enabled.

#### Scenario: Image upload
- **WHEN** an editor uploads an image to the image field
- **THEN** the image is stored in Sanity's asset pipeline and accessible via the image URL builder

#### Scenario: Image is required
- **WHEN** an editor attempts to publish a projektSketch without an image
- **THEN** Sanity Studio blocks publication with a validation error

### Requirement: Order field for manual sequencing
Each `projektSketch` document SHALL have a numeric `order` field used to sort images within their category.

#### Scenario: Default ordering in queries
- **WHEN** `getAllProjektSketches()` is called
- **THEN** results are returned sorted by `category` ascending then `order` ascending

### Requirement: Sanity query returns all sketches with image dimensions
The data layer SHALL expose a `getAllProjektSketches()` query that returns all published `projektSketch` documents including the image asset's pixel dimensions.

#### Scenario: Query returns dimension metadata
- **WHEN** `getAllProjektSketches()` is called
- **THEN** each result includes `image.asset.metadata.dimensions.width` and `image.asset.metadata.dimensions.height` for use with `next/image`

#### Scenario: TypeScript type covers all fields
- **WHEN** the query result is assigned to a `ProjektSketch` typed variable
- **THEN** TypeScript enforces presence of `_id`, `category`, `image`, `order`, and image dimension metadata — no `any` types

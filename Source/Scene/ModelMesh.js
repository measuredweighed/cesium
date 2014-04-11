/*global define*/
define([
        '../Core/defineProperties'
    ], function(
        defineProperties) {
    "use strict";

    /**
     * A model's mesh.  This will eventually hold a material for material animations via the Cesium API.
     * <p>
     * Use {@link Model#getMesh} to create an instance.
     * </p>
     *
     * @alias ModelMesh
     * @internalConstructor
     *
     * @see Model#getMesh
     */
    var ModelMesh = function(mesh, id) {
        this._name = mesh.name;
        this._id = id;
    };

    defineProperties(ModelMesh.prototype, {
        /**
         * The value of the <code>name</code> property of this mesh.  This is the
         * name assigned by the artist when the asset is created.  This can be
         * different than the name of the mesh property ({@link ModelMesh#id}),
         * which is internal to glTF.
         *
         * @memberof ModelMesh.prototype
         *
         * @type {String}
         * @readonly
         */
        name : {
            get : function() {
                return this._name;
            }
        },

        /**
         * The name of the glTF JSON property for this mesh.  This is guaranteed
         * to be unique among all meshes.  It may not match the mesh's <code>
         * name</code> property (@link ModelMesh#name), which is assigned by
         * the artist when the asset is created.
         *
         * @memberof ModelMesh.prototype
         *
         * @type {String}
         * @readonly
         */
        id : {
            get : function() {
                return this._id;
            }
        }
    });

    return ModelMesh;
});
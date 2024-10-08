const express = require("express");
const router = express.Router();

const {
    getEnvelopes, 
    getEnvelopeById,
    getEnvelopeTransactions,
    addEnvelope,
    deleteEnvelope,
    updateEnvelope,
    addEnvelopeTransaction,
} = require("../controllers/envelopes");


/**
 * @swagger
 * /api/v1/envelopes:
 *    get:
 *      summary: Get all envelopes
 *      produces:
 *        - application/json
 *      tags:
 *        - Envelopes:
 *      responses:
 *        "200":
 *          description: Returns all envelopes
 * 
 */
router.get("/", getEnvelopes);

/**
 * @swagger
 * /api/v1/envelopes/{id}:
 *    get:
 *      summary: Get a single envelope by id
 *      produces:
 *        - application/json
 *      tags:
 *        - Envelopes
 *      parameters:
 *        - in: path
 *          name: id
 *          description: envelope id
 *          type: integer
 *          required: true
 *          example: 4
 *      responses:
 *        "200":
 *          description: Returns an envelope and its content
 *        "404":
 *          description: Not found
 *        "500":
 *          description: Internal server error
 */
router.get("/:id", getEnvelopeById);

/**
 * @swagger
 * /api/v1/envelopes:
 *    post:
 *      summary: Create a new envelope
 *      produces: 
 *        - application/json
 *      tags:
 *        - Envelopes
 *      requestBody:
 *        description: Data for creating a new envelope
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                title:
 *                  type: string
 *                budget:
 *                  type: integer
 *              example:
 *                title: Gym membership
 *                budget: 45
 *      responses:
 *        "201":
 *          description: Returns a newly created envelope
 *        "500":
 *          description: Internal server error
 * 
 */
router.post("/", addEnvelope);

/**
 * @swagger
 * /api/v1/envelopes/{id}:
 *    put:
 *      summary: Updates existing envelope
 *      produces:
 *        - application/json
 *      tags:
 *        - Envelopes
 *      parameters:
 *        - in: path
 *          name: id
 *          description: envelope ID
 *          type: integer
 *          required: true
 *          example: 4
 *      requestBody:
 *        description: Data for a new envelope
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                title:
 *                  type: string
 *                budget:
 *                  type: integer
 *              example:
 *                title: Gym membership
 *                budget: 45
 *      responses:
 *        "201":
 *          description: Returns the updated envelope
 *        "404":
 *          description: Not found
 *        "500":
 *          description: Internal server error
 */
router.put("/:id", updateEnvelope);

/**
 * @swagger
 * /api/v1/envelopes/{id}:
 *    delete:
 *      summary: Deletes a single envelope
 *      produces:
 *        - application/json
 *      tags:
 *        - Envelopes
 *      parameters:
 *        - in: path
 *          name: id
 *          description: Envelope ID to delete
 *          type: integer
 *          required: true
 *          example: 4
 *      responses:
 *        "204": 
 *          description: Envelope successfully deleted
 *        "404": 
 *          description: Not found
 *        "500": 
 *          description: Internal server error
 * 
 */
router.delete("/:id", deleteEnvelope);

/**
 * @swagger
 * /api/v1/envelopes/{id}/transactions:
 *    get:
 *      summary: Get envelope transactions by ID
 *      produces:
 *        - application/json
 *      tags:
 *        - Envelopes
 *      parameters:
 *        - in: path
 *          name: id
 *          description: envelope ID
 *          type: integer
 *          required: true
 *          example: 4
 *      responses:
 *        "200":
 *          description: Returns an envelope transaction
 *        "404":
 *          description: Not found
 *        "500":
 *          description: Internal server error
 */
router.get('/:id/transactions', getEnvelopeTransactions);

/**
 * @swagger
 * /api/v1/envelopes/{id}/transactions:
 *    post:
 *      summary: Creates a new transaction for an envelope
 *      produces:
 *        - application/json
 *      tags:
 *        - Envelopes
 *      parameters:
 *        - in: path
 *          name: id
 *          description: envelope id
 *          type: integer
 *          required: true
 *          example: 4
 *      requestBody:
 *        description: Data for new envelope transaction
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                title:
 *                  type: string
 *                amount:
 *                  type: integer
 *              example:
 *                title: Gym membership
 *                amount: 45
 *      responses:
 *        "201":
 *          description: Returns created envelope
 *        "500":
 *          description: Internal server error
 */
router.post('/:id/transactions', addEnvelopeTransaction);

module.exports = router;

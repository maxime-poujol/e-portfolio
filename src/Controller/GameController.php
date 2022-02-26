<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/games")
 */
class GameController extends AbstractController
{
    /**
     * @Route("/", name="games_index")
     */
    public function index(): Response
    {
        return $this->render('game/index.html.twig', [
            'controller_name' => 'GameController',
        ]);
    }

    /**
     * @Route("/flying-bird", name="games_flying-bird")
     */
    public function flyingBird(): Response
    {
        return $this->render('game/flyingbird.html.twig', [
            'controller_name' => 'GameController',
        ]);
    }
}
